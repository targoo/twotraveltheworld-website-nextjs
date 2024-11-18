import { Colors } from '@styles/colors';
import { media } from '@styles/media';
import Link from 'next/link';
import styled from 'styled-components';

import { Logo } from '../../atoms/Logo/Logo';

export function LatestBlogs() {
  return (
    <LatestBlogsWrapper>
      <LatestBlogWrapper>LatestBlogWrapper1</LatestBlogWrapper>
      <LatestBlogWrapper>LatestBlogWrapper2</LatestBlogWrapper>
      <LatestBlogWrapper>LatestBlogWrapper3</LatestBlogWrapper>
      <LatestBlogWrapper>LatestBlogWrapper4</LatestBlogWrapper>
    </LatestBlogsWrapper>
  );
}

const LatestBlogsWrapper = styled.div`
  padding: 0 var(--right-left-global-padding);
  /* display: flex;
  flex-direction: column; */
  border: 1px solid red;

  /* display: grid;
  grid-template-columns: 1 1;
  grid-template-rows: 1 1; */

  ${media.from_tablet`
  `}
`;

const LatestBlogWrapper = styled.div`
  padding: 10px;
  border: 1px solid red;
`;

// const FooterMeta = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 32px 0;
//   width: 100%;

//   .logo {
//     font-size: 2rem;
//     margin-bottom: 16px;
//     font-weight: var(--font-weight-extra-light);
//     color: ${Colors.White};
//   }

//   .sublogo {
//     font-weight: var(--font-weight-medium);
//     font-style: italic;
//     color: var(--color-gray-500);

//     .person-name {
//       font-weight: var(--font-weight-bold);
//       color: var(--color-gray-300);
//     }
//   }

//   .legal {
//     margin-top: auto;
//     color: var(--color-gray-700);
//   }
// `;

// const FooterLinks = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   gap: 64px;
//   padding: 32px 0;
//   font-weight: var(--font-weight-bold);
//   color: var(--color-gray-700);

//   ${media.from_tablet`
//     justify-content: flex-end;
//   `}

//   h2 {
//     margin-bottom: 24px;
//     letter-spacing: 0.03em;
//     text-transform: uppercase;
//   }

//   li {
//     margin: 0;
//     padding: 0;
//     list-style-type: none;
//   }

//   li:last-of-type {
//     margin-bottom: 0;
//   }

//   a {
//     text-decoration: none;
//     color: var(--color-gray-100);
//     font-weight: var(--font-weight-medium);
//   }
// `;

// type FooterProps = {
//   className?: string;
// };
