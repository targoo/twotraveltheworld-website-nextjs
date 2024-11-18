import { Colors } from '@styles/colors';
import styled from 'styled-components';

export function ColorPalette({}: ColorPaletteProps) {
  return (
    <ColorPaletteWrapper>
      <ColorPaletteRowWrapper>
        <ColorPaletteLabel>Primary</ColorPaletteLabel>
        <ColorPaletteItem backgroundColor={Colors.PrimaryDarkest}>
          Primary Darkest
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.PrimaryDarker}>
          Primary Darker
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.PrimaryDark}>
          Primary Dark
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Primary}>
          Primary
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.PrimaryLight}>
          Primary Light
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.PrimaryLighter}>
          Primary Lighter
        </ColorPaletteItem>
        <ColorPaletteItem
          backgroundColor={Colors.PrimaryLightest}
          lightColor={true}
        >
          Primary Lightest
        </ColorPaletteItem>
      </ColorPaletteRowWrapper>
      <ColorPaletteRowWrapper>
        <ColorPaletteLabel>Contrast</ColorPaletteLabel>
        <ColorPaletteItem backgroundColor={Colors.ContrastDark}>
          Contrast Dark
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Contrast}>
          Contrast
        </ColorPaletteItem>
        <ColorPaletteItem
          backgroundColor={Colors.ContrastLight}
          lightColor={true}
        >
          Contrast Light
        </ColorPaletteItem>
      </ColorPaletteRowWrapper>
      <ColorPaletteRowWrapper>
        <ColorPaletteLabel>Secondary</ColorPaletteLabel>
        <ColorPaletteItem backgroundColor={Colors.SecondaryDark}>
          Secondary Dark
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Secondary}>
          Secondary
        </ColorPaletteItem>
        <ColorPaletteItem
          backgroundColor={Colors.SecondaryLight}
          lightColor={true}
        >
          Secondary Light
        </ColorPaletteItem>
      </ColorPaletteRowWrapper>
      <ColorPaletteRowWrapper>
        <ColorPaletteLabel>Gray</ColorPaletteLabel>
        <ColorPaletteItem backgroundColor={Colors.Gray50}>
          Gray50
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray100}>
          Gray100
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray200}>
          Gray200
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray300}>
          Gray300
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray400}>
          Gray400
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray500}>
          Gray500
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray600}>
          Gray600
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray700} lightColor={true}>
          Gray700
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray800} lightColor={true}>
          Gray800
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray900} lightColor={true}>
          Gray900
        </ColorPaletteItem>
        <ColorPaletteItem backgroundColor={Colors.Gray1000} lightColor={true}>
          Gray1000
        </ColorPaletteItem>
      </ColorPaletteRowWrapper>
    </ColorPaletteWrapper>
  );
}

const ColorPaletteWrapper = styled.div<ColorPaletteProps>`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ColorPaletteRowWrapper = styled.div<ColorPaletteProps>`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const ColorPaletteLabel = styled.div<ColorPaletteProps>`
  font-size: 1.5rem;
  min-width: 8ch;
`;

const ColorPaletteItem = styled.div<ColorPaletteProps>`
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${Colors.Gray100};
  border-radius: 8px;
  font-size: 0.55rem;
  width: 75px;
  height: 75px;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${props => (props.lightColor ? 'black' : 'white')};
  box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
`;

type ColorPaletteProps = {
  backgroundColor?: string;
  lightColor?: boolean;
};
