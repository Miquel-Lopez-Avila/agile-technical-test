import { FC } from 'react';
import {
  Description,
  Title,
  Wrapper,
  Preview,
  SectionLink
} from './SectionPreview.styled';

interface Props {
  image: string;
  title: string;
  link: string;
  description: string;
}

const SectionPreview: FC<Props> = ({ image, title, description, link }) => (
  <Wrapper>
    <Preview src={image} />
    <SectionLink href={link} target="_blank">
      {link}
    </SectionLink>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default SectionPreview;
