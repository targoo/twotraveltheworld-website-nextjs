// https://blog.logrocket.com/create-table-contents-highlighting-react/
// https://reacthustle.com/blog/how-to-track-scroll-direction-inside-intersection-observer-in-react
// https://www.youtube.com/watch?v=eujA1RS9fDI

import { Colors } from '@styles/colors';
import { media } from '@styles/media';
import styled from 'styled-components';

export function Layout({ children }: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export function LayoutMain({ children }: LayoutProps) {
  return <LayoutMainWrapper>{children}</LayoutMainWrapper>;
}

export const LayoutNav = styled.nav`
  display: none;
  height: auto;
  /* border: 1px red solid; */
  background-color: ${Colors.Primary};

  ${media.from_tablet`
    display: block;
  `}
`;

const LayoutMainWrapper = styled.section<LayoutProps>`
  padding-inline: var(--right-left-global-padding);
`;

const LayoutWrapper = styled.section<LayoutProps>`
  padding: 0;
  display: flex;
`;

type LayoutProps = { children: React.ReactNode };
