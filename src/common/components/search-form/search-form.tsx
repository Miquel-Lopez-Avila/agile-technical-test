import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/common/components/button/Button';
import { enterKey, textareaBaseRows } from '@/application/config/variables';
import { Size } from './enums';
import {
  Wrapper,
  SearchIcon,
  CloseIcon,
  Form,
  ContainerIcons,
  TextareaField
} from './search-form.styled';

interface Props {
  showSubmitButton?: boolean;
  size?: Size.MEDIUM | Size.SMALL;
}

const SearchForm: React.FC<Props> = ({
  showSubmitButton = true,
  size = Size.MEDIUM
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('q') || ''
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
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

  /**
   * Function to handle the enter key press to submit the form instead of
   * adding a new line to the textarea
   * @param event
   * @returns {void}
   */
  const handleKeyDownTextarea = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === enterKey) {
      event.preventDefault();
      navigate(`/search?q=${searchValue}`);
    }
  };

  return (
    <Form id="home-search" onSubmit={handleSubmitForm} size={size}>
      <Wrapper size={size}>
        <ContainerIcons>
          <SearchIcon />
        </ContainerIcons>
        <TextareaField
          maxLength={2048}
          value={searchValue}
          aria-label="Buscar"
          ref={textareaRef}
          onKeyDown={handleKeyDownTextarea}
          name="q"
          rows={textareaBaseRows}
          onChange={(e) => {
            autoGrowTextarea();
            setSearchValue(e.target.value);
          }}
        />
        <ContainerIcons>
          <CloseIcon onClick={handleResetForm} />
        </ContainerIcons>
      </Wrapper>
      {showSubmitButton && <Button disabled={!searchValue}>Buscar</Button>}
    </Form>
  );
};

export default SearchForm;
