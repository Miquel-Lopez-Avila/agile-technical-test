import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import data from '@/common/utils/fake-data';
import Section from '@/pages/search/components/section/Section';
import SectionPreview from '@/pages/search/components/section-preview/SectionPreview';
import { Animal } from '@/common/interfaces';
import { wait } from '@/common/utils/mock';
import SectionSkeleton from '@/pages/search/components/sections-skeleton/SectionSkeleton';
import NoMatchFound from '@/pages/search/components/no-match-found/NoMatchFound';
import useIsTablet from '@/common/hooks/use-is-tablet';
import {
  hideMobilePreview,
  showMobilePreview
} from '@/application/styles/global-styles/app-globals';
import {
  Container,
  ContainerPreview,
  ContainerSections,
  Wrapper
} from './Search.styled';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('q');

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [animals, setAnimals] = useState<Animal[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { isTablet } = useIsTablet();

  const handleShowPreviewAnimal = (animal: Animal) => {
    setSelectedAnimal(animal);
  };

  const retrieveAnimalsWithDelay = () => {
    setIsLoading(false);

    if (!searchValue) return setAnimals(null);

    setAnimals(
      data.filter((item: Animal) => {
        return item.type.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  };

  const renderAnimalPreview = () => {
    if (!selectedAnimal) return null;

    const mobilePreviewContainer = document.getElementById(
      'animal-mobile-preview'
    );
    const preview = (
      <SectionPreview
        description={selectedAnimal.description}
        image={selectedAnimal.image}
        title={selectedAnimal.title}
        link={selectedAnimal.url}
      />
    );

    // Add styles to animal preview modal container in tablet and mobile view
    // even if the user is resizing browser window, and we remove those
    // styles if it's desktop
    if (isTablet) {
      showMobilePreview();
    } else {
      hideMobilePreview();
    }

    // If it's desktop we render the container normally
    if (!isTablet) return preview;

    // If it's tablet or mobile we render the preview outside the DOM node tree
    // to simulate a modal
    return createPortal(preview, mobilePreviewContainer as Element);
  };

  /**
   * useEffect that triggers retrieveAnimalsWithDelay func with delay
   * to retrieve the animals from the fake-data.ts file
   */
  useEffect(() => {
    setIsLoading(true);

    // Cleaning states when user makes a new search
    if (animals && animals.length) setAnimals(null);
    if (selectedAnimal) setSelectedAnimal(null);

    const timeout = wait(retrieveAnimalsWithDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  // add a useEffect to handle the click on the backdrop and hide it
  useEffect(() => {
    const backdrop = document.querySelector('.backdrop') as HTMLElement;

    if (!backdrop) return;

    backdrop.onclick = () => {
      setSelectedAnimal(null);
      hideMobilePreview();
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <ContainerSections>
          {!animals?.length && !isLoading && (
            <NoMatchFound searchValue={searchValue} />
          )}
          {animals?.map((item: Animal) => (
            <Section
              key={item.id}
              title={item.title}
              description={item.description}
              link={item.url}
              showPreview={() => handleShowPreviewAnimal(item)}
            />
          ))}
          {isLoading && <SectionSkeleton />}
        </ContainerSections>
        <ContainerPreview>{renderAnimalPreview()}</ContainerPreview>
      </Container>
    </Wrapper>
  );
};

export default Search;
