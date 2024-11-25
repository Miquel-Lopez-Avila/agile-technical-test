import { FC, useRef, useState, KeyboardEvent, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@/common/components/button/Button';
import { textareaBaseRows } from '@/application/config/variables';
import { Size } from './enums';
import {
  Wrapper,
  SearchIcon,
  CloseIcon,
  Form,
  ContainerIcons,
  TextareaField
} from './SearchForm.styled';

interface Props {
  showSubmitButton?: boolean;
  size?: Size.MEDIUM | Size.SMALL;
}

const SearchForm: FC<Props> = ({
  showSubmitButton = true,
  size = Size.MEDIUM
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('q') || ''
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchValue}`);
  };

  const handleResetForm = () => {
    setSearchValue('');
  };

  // Function that auto grows the textarea based on the content
  const autoGrowTextarea = () => {
    if (!textareaRef.current) return;

    const lineHeight = parseFloat(
      getComputedStyle(textareaRef.current).lineHeight
    );
    const currentRows = textareaRef.current.getAttribute('rows');

    if (isNaN(lineHeight) || lineHeight === 0) return;

    const lineCount = Math.ceil(textareaRef.current.scrollHeight / lineHeight);
    const nextRows = String(lineCount - textareaBaseRows);

    if (currentRows === nextRows) return;

    textareaRef.current.setAttribute('rows', nextRows);
  };

  // Function to handle the enter key press to submit the form instead of
  // adding a new line to the textarea
  const handleKeyDownTextarea = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/search?q=${searchValue}`);
    }
  };

  return (
    <Form onSubmit={handleSubmitForm} size={size}>
      <Wrapper size={size}>
        <ContainerIcons>
          <SearchIcon />
        </ContainerIcons>
        <TextareaField
          maxLength={2048}
          value={searchValue}
          data-testid="search"
          aria-label={t('components.searchForm.search')}
          ref={textareaRef}
          onKeyDown={handleKeyDownTextarea}
          name="q"
          rows={textareaBaseRows}
          onChange={(e) => {
            if (size === Size.MEDIUM) autoGrowTextarea();
            setSearchValue(e.target.value);
          }}
        />
        <ContainerIcons>
          {searchValue && <CloseIcon onClick={handleResetForm} />}
        </ContainerIcons>
      </Wrapper>
      {showSubmitButton && (
        <Button data-testid="submit-button" disabled={!searchValue}>
          {t('components.searchForm.search')}
        </Button>
      )}
    </Form>
  );
};

export default SearchForm;
