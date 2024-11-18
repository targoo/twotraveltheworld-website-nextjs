import { Colors } from '@styles/colors';
import React from 'react';
import styled from 'styled-components';

export const Marker = ({ color = Colors.Primary, number = 1 }) => (
  <StyledMarkerIcon color={color}>{number}</StyledMarkerIcon>
);

const StyledMarkerIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 32px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${props => props.color};
  border-radius: 8px;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-color: ${props => props.color} transparent transparent transparent;
    border-width: 8px 8px 0 8px;
  }
`;
