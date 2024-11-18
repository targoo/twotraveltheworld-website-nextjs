import ImageNext from 'next/image';
import React from 'react';
import styled from 'styled-components';

export function Image({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: ImageProps) {
  return (
    <ImageWrapper className={className}>
      <ImageNext src={src} alt={alt} width={width} height={height} {...rest} />
    </ImageWrapper>
  );
}

export const ImageSepia = styled(Image)`
  img {
    transition: filter 300ms ease-in-out;
    &:hover {
      filter: sepia(${props => `${props.value || 50}%`});
    }
  }
`;

export const ImageContrast = styled(Image)`
  img {
    transition:
      filter 300ms ease-in-out,
      transform 300ms ease-in-out;
    transition-delay: 50ms;
    &:hover {
      transform: scale(1.1);
      filter: contrast(${props => `${props.value || 50}%`});
    }
  }
`;

const ImageWrapper = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
`;

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  value?: number;
  quality?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
};
