import React from 'react';
import { Wrapper, Description, Title, SectionLink } from './Section.styled';

interface props {
  title: string;
  description: string;
  link: string;
  showPreview: () => void;
}

const Section: React.FC<props> = ({
  title,
  description,
  link,
  showPreview
}) => {
  return (
    <Wrapper>
      <SectionLink href={link} target="_blank">
        {link}
      </SectionLink>
      <Title onClick={showPreview}>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Section;
