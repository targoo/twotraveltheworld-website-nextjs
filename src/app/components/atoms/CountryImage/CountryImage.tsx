import { media } from '@styles/media';
import styled from 'styled-components';

export function CountryImage({ children, label = '' }: CountryImageProps) {
  return (
    <CountryImageWrapper>
      {children}
      <CountryLabelWrapper>
        <CountryLabel>{label}</CountryLabel>
      </CountryLabelWrapper>
    </CountryImageWrapper>
  );
}

const CountryImageWrapper = styled.div<Partial<CountryImageProps>>`
  /* line-height: 0; */
  position: relative;
  width: max-content;
`;

const CountryLabelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountryLabel = styled.label`
  padding: 0 40px;
  line-height: 3em;
  font-size: 4rem;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: brightness(120%) blur(5px);
  border-radius: 8px;
`;

type CountryImageProps = {
  children: React.ReactNode;
  label: string;
};
