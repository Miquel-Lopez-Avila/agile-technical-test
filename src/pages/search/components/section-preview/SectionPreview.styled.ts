import styled from 'styled-components';
import ImagePreview from '@/common/components/image-preview/ImagePreview';
import { paletteColors } from '@/application/styles/palette-colors';
import Link from '@/common/components/link/Link';

export const Wrapper = styled.section   `
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${paletteColors.lightGrey};
  padding: 15px;
  border-radius: 4px;
  height: fit-content;
  background-color: white;
`;

export const SectionLink = styled(Link)`
  font-size: 12px;
  color: ${paletteColors.black};
  text-decoration: none;
`;

export const Preview = styled(ImagePreview)`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

export const Description = styled.p``;

export const Title = styled.p`
  font-weight: bold;
`;
