/* eslint-disable @next/next/no-img-element */
// https://developers.facebook.com/docs/instagram-basic-display-api/getting-started

import picture2 from '@public/blogs/harry-potter-9-3.4-platform.jpg';
import picture3 from '@public/blogs/harry-potter-and-the-cursed-child.png';
import picture1 from '@public/blogs/warner-brothers-studio-tour.jpg';
import styled from 'styled-components';

export function InstagramFeed({ padding = 10, className }: BaseProps) {
  return (
    <InstagramFeedWrapper padding={padding} className={className}>
      <ImageWrapper>
        <img
          alt="A wide-open outdoor concrete area. Architecture"
          src={picture1.src}
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt="A modular building against a blue sky. Architecture"
          src={picture2.src}
        />
      </ImageWrapper>
      <ImageWrapper>
        <img
          alt="A unique building with inset curves. Architecture"
          src={picture3.src}
        />
      </ImageWrapper>
    </InstagramFeedWrapper>
  );
}

const InstagramFeedWrapper = styled.section<BaseProps>`
  padding: 0 var(--right-left-global-padding);
  display: flex;
  gap: 8px;
`;

const ImageWrapper = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  @supports (aspect-ratio: 1 / 1) {
    img {
      height: revert;
      aspect-ratio: 1 / 1;
    }
  }
`;

type BaseProps = {
  padding?: number;
  className?: string;
};
