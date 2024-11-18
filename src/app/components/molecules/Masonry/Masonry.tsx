import picture2 from '@public/blogs/harry-potter-9-3.4-platform.jpg';
import picture3 from '@public/blogs/harry-potter-and-the-cursed-child.png';
import picture4 from '@public/blogs/harry-potter-pinterest-1.png';
import picture5 from '@public/blogs/harry-potter-pinterest-2.png';
import picture6 from '@public/blogs/harry-potter-wands.jpg';
import picture7 from '@public/blogs/the-school-of-witchcraft-and-wizardry.jpg';
// https://nextjs.org/docs/basic-features/image-optimization
// Other option: https://masonry.desandro.com/
import picture1 from '@public/blogs/warner-brothers-studio-tour.jpg';
import picture8 from '@public/blogs/warner-brothers-studio-tour.jpg';
import { Colors } from '@styles/colors';
import { media } from '@styles/media';
import Image from 'next/image';
import styled from 'styled-components';

export function Masonry() {
  return (
    <UlElement>
      <LiElement>
        <a href="">
          <Image
            src={picture5}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture1}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture2}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture3}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture4}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture5}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture6}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture7}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture5}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
      <LiElement>
        <a href="">
          <Image
            src={picture8}
            alt="Picture of the author"
            placeholder="blur"
          />
        </a>
      </LiElement>
    </UlElement>
  );
}

const UlElement = styled.ul`
  --gap: 16px;
  list-style-type: none;
  column-count: 1;
  column-gap: var(-gap);
  padding: var(-gap);
  margin: 0;

  ${media.from_tablet`
    column-count: 2;
  `}

  ${media.from_laptop`
    column-count: 3;
  `}
`;

const LiElement = styled.li`
  padding: 0;
  margin: 0;
  break-inside: avoid;

  img {
    margin-bottom: 10px !important; // because of NEXT IMAGE default style
  }
`;
