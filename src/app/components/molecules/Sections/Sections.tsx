'use client';

import { media } from '@styles/media';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import styled from 'styled-components';

import { ImageContrast } from '../../atoms/Image';

export function Sections({}: MainNavigationProps): JSX.Element {
  const locale = useLocale();

  return (
    <SectionsWrapper>
      {images.map(({ src, alt, href }) => {
        return (
          <SectionWrapper key={src}>
            <Link href={`/${locale}/${href}`}>
              <ImageContrast
                priority={true}
                quality={80}
                alt={alt}
                src={src}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                height={400}
                width={800}
              />
            </Link>
          </SectionWrapper>
        );
      })}
    </SectionsWrapper>
  );
}

const SectionsWrapper = styled.div`
  // Fall Back if grid not supported
  display: flex;
  flex-direction: column;
  padding: var(--right-left-global-padding);

  @supports (display: grid) {
    --gap: var(--right-left-global-padding);
    display: grid;
    gap: var(--gap);
    grid-gap: var(--gap); // IE support
    grid-template-columns: 1fr;

    ${media.from_tablet`
      grid-template-columns: 1fr 1fr;
    `}

    ${media.from_laptop`
      grid-template-columns: repeat(3, 1fr);
    `}
  }
`;

const SectionWrapper = styled.div``;

type MainNavigationProps = {};

Sections.displayName = 'Sections';

const images = [
  {
    src: '/mainsections/twotraveltheworld-travel-blog-section.jpg',
    alt: 'Travel Blogs',
    href: 'blogs',
  },
  {
    src: '/mainsections/twotraveltheworld-travel-destinations-section.jpg',
    alt: 'Travel Destination',
    href: 'destinations',
  },
  {
    src: '/mainsections/twotraveltheworld-travel-diaries-section.jpg',
    alt: 'Travel Diaries',
    href: 'diaries',
  },
  {
    src: '/mainsections/twotraveltheworld-travel-photography-section.jpg',
    alt: 'Travel Photography',
    href: 'travel-photography',
  },
  {
    src: '/mainsections/twotraveltheworld-travel-resources-section.jpg',
    alt: 'Travel Resources',
    href: 'resources',
  },
  {
    src: '/mainsections/twotraveltheworld-kids-section.jpg',
    alt: 'Kids Section',
    href: 'kids-section',
  },
];
