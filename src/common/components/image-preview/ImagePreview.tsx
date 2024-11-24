import { FC, HTMLAttributes, HTMLProps, ReactEventHandler } from 'react';
import emptyImage from '@/application/assets/image-preview.jpg';

type Props = HTMLAttributes<HTMLImageElement> &
  Pick<HTMLProps<HTMLImageElement>, 'alt'> & {
    src?: string | null;
    fallback?: string | null;
  };

const ImagePreview: FC<Props> = ({
  alt = '',
  src = '',
  fallback = emptyImage,
  ...rest
}) => {
  const handleImageError: ReactEventHandler<HTMLImageElement> = (event) => {
    event.currentTarget.src = fallback as string;
  };

  return (
    <img
      src={src || ''}
      style={{
        backgroundImage: `url(${fallback})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      }}
      onError={handleImageError}
      alt={alt}
      {...rest}
    />
  );
};

export default ImagePreview;
