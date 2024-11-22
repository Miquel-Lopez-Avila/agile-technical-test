import React from 'react';
import {
  Description,
  Title,
  Wrapper,
  Preview,
  SectionLink
} from './SectionPreview.styled';

interface props {
  image: string;
  title: string;
  link: string;
  description: string;
}

const SectionPreview: React.FC<props> = ({
  image,
  title,
  description,
  link
}) => {
  return (
    <Wrapper>
      <Preview src={image} />
      <SectionLink href={link} target="_blank">
        {link}
      </SectionLink>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default SectionPreview;
