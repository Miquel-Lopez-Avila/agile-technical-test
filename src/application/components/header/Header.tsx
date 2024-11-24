import { useMatch } from 'react-router-dom';
import Link from '@/common/components/link/Link';
import profileImg from '@/application/assets/profile.png';
import appImage from '@/application/assets/app-drawer.png';
import Logo from '@/application/components/logo/Logo';
import SearchForm from '@/common/components/search-form/SearchForm';
import { Size } from '@/common/components/search-form/enums';
import {
  AppStoreIcon,
  BrandName,
  Container,
  ContainerBrand,
  ContainerLogo,
  ContainerProfile,
  ProfileImage,
  Wrapper
} from './Header.styled';

const Header = () => {
  const isSearchView = useMatch('/search');

  return (
    <Wrapper>
      <Container>
        <ContainerBrand>
          {isSearchView ? (
            <>
              <ContainerLogo>
                <Link href="/home">
                  <Logo width={92} height={31} />
                </Link>
              </ContainerLogo>
              <SearchForm showSubmitButton={false} size={Size.SMALL} />
            </>
          ) : (
            <BrandName>
              <b>Agile Content</b> Frontend test
            </BrandName>
          )}
        </ContainerBrand>
        <ContainerProfile>
          <AppStoreIcon src={appImage} alt="app-store" />
          <ProfileImage src={profileImg} alt="user-profile" />
        </ContainerProfile>
      </Container>
    </Wrapper>
  );
};

export default Header;
