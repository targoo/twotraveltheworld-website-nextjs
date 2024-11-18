import { Colors } from '@styles/colors';
import { media } from '@styles/media';
import { CSSProperties } from 'react';
import styled from 'styled-components';

export function Base({ children, padding = 10, className }: BaseProps) {
  return (
    <BaseWrapper style={styles} padding={padding} className={className}>
      {children}
    </BaseWrapper>
  );
}

// It's important to pass the className in order to propagate the style
export const AlternativeBase = styled(Base)`
  background-color: ${Colors.TransparentGray15};
`;

const BaseWrapper = styled.div<BaseProps>`
  border: 1px solid ${Colors.Contrast};
  padding: ${props => `${props.padding}px`};

  ${media.from_tablet`
    border: 1px solid var(--color-primary);
  `}
`;

const styles: CSSProperties = {
  padding: '10px',
  margin: 0,
};

type BaseProps = {
  children: React.ReactNode;
  padding: number;
  className?: string;
};
