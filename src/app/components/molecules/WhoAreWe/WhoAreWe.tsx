/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

import davidLogo from '../../../../public/whoarewe/david.jpg';
import kroLogo from '../../../../public/whoarewe/kro.png';

export const WhoAreWe = () => {
  return (
    <StyledWhoAreWe>
      <StyledTitle>
        <span>Who are we?</span>
      </StyledTitle>
      <StyledContent>
        <StyledFigure>
          <div className="blurry">
            <img src={davidLogo.src} alt="David Calcus" />
          </div>
          <div className="base">
            <img src={davidLogo.src} alt="David Calcus" />
          </div>
          <figcaption>An elephant at sunset</figcaption>
        </StyledFigure>
        <StyledFigure>
          <div className="blurry">
            <img src={kroLogo.src} alt="Caroline Vaisiere" />
          </div>
          <div className="base">
            <img src={kroLogo.src} alt="Caroline Vaisiere" />
          </div>
          <figcaption>An elephant at sunset</figcaption>
        </StyledFigure>
      </StyledContent>
    </StyledWhoAreWe>
  );
};

const StyledWhoAreWe = styled.div`
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: var(--color-primary);
  font-size: 3rem;
  position: relative;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 3rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  font-family:
    Amatic SC,
    sans-serif;
  margin-bottom: 3em;

  &:before {
    content: '';
    display: block;
    border-top: 1px solid var(--color-contrast);
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  span {
    background: var(--color-white);
    padding: 0 4px;
    position: relative;
    z-index: 5;
  }
`;

const StyledContent = styled.div`
  border: 1px solid;
`;

const StyledFigure = styled.div`
  position: relative;
  --with: 300px;

  .base {
    position: relative;
    filter: drop-shadow(1px 2px 4px hsl(0deg 0% 0% / 0.5));

    img {
      width: var(--with);
      clip-path: circle(135px at calc(var(--with) / 2) calc(var(--with) / 2));
      transition: clip-path 500ms;
      will-change: transform;
    }

    :hover img {
      clip-path: circle(145px at calc(var(--with) / 2) calc(var(--with) / 2));
      transition: clip-path 200ms;
      will-change: transform;
    }
  }
  .blurry {
    position: absolute;

    img {
      width: var(--with);
      border-radius: 50%;
      filter: blur(16px);
    }
  }
`;

type WhoAreWeProps = {};
