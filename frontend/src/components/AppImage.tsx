import React from 'react';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Image({ src, alt = 'Image Name', className = '', ...props }: ImageProps) {
  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    (e.target as HTMLImageElement).src = '/assets/images/no_image.png';
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}

export default Image;

