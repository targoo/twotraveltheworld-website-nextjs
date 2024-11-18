import { Colors } from '@styles/colors';
import { FontWeights, HeadingStyle4 } from '@styles/fonts';
import styled from 'styled-components';

export function Breadcrumbs({ children }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbsList>{children}</BreadcrumbsList>
    </nav>
  );
}

export const Crumb = styled.li<CrumbProps>`
  ${HeadingStyle4}

  display: inline-block;
  margin: 0;
  font-weight: ${FontWeights.Bold};
  color: ${props => (props.disabled ? Colors.BlackLight : Colors.Black)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:not(:first-of-type) {
    --spacing: 16px;
    margin-left: var(--spacing);

    &:before {
      content: '';
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      margin-right: var(--spacing);
      height: 0.6em;
      opacity: 0.25;
      color: ${Colors.Primary};
    }
  }

  &:last-of-type {
    font-weight: ${FontWeights.Regular};
  }

  a {
    color: inherit;
    cursor: inherit;
    transition: color ease-in-out 0.3s;
    text-decoration: none;

    &:hover {
      color: ${props => (props.disabled ? Colors.BlackLight : Colors.Contrast)};
    }
  }
`;

const BreadcrumbsList = styled.ol<BreadcrumbsListProps>`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

interface BreadcrumbsListProps
  extends React.ButtonHTMLAttributes<HTMLOListElement> {}

interface CrumbProps extends React.ButtonHTMLAttributes<HTMLLIElement> {
  disabled?: boolean;
}

type BreadcrumbsProps = {
  children: React.ReactNode;
};
