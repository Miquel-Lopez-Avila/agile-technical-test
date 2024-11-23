import { FC } from 'react';
import { Wrapper, Description, Title, SectionLink } from './Section.styled';

interface Props {
  title: string;
  description: string;
  link: string;
  showPreview: () => void;
}

const Section: FC<Props> = ({ title, description, link, showPreview }) => (
  <Wrapper>
    <SectionLink href={link} target="_blank">
      {link}
    </SectionLink>
    <Title onClick={showPreview}>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default Section;
