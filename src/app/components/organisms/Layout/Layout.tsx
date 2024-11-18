import { Colors } from '@styles/colors';
import styled from 'styled-components';

export function Layout() {
  return (
    <LayoutWrapper>
      <LayoutNav>
        <h2>Navigation</h2>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </LayoutNav>
      <LayoutMain>
        <h1>Welcome to ThingStore</h1>
        <p>Please enjoy your time shopping!</p>
      </LayoutMain>
    </LayoutWrapper>
  );
}

export function LayoutMain({ children }: { children: React.ReactNode }) {
  return <LayoutMainWrapper>{children}</LayoutMainWrapper>;
}

const LayoutMainWrapper = styled.section<LayoutProps>`
  padding: 0 var(--right-left-global-padding);
`;

const LayoutWrapper = styled.section<LayoutProps>`
  padding: 0 var(--right-left-global-padding);
  display: flex;
`;

export const LayoutNav = styled.nav`
  border: 1px solid ${Colors.Contrast};
  flex-basis: 200px;
  padding: 8px;
`;

export const LayoutOneMain = styled.main`
  border: 1px solid ${Colors.Contrast};
  flex-grow: 1;
  padding: 8px;
`;

type LayoutProps = {};
