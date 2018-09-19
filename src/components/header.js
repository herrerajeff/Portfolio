import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { primary, header } from '../utils/theme';
import { Wrapper } from './elements';
import { media } from '../utils/media';
import Nav from './nav';

const Logo = styled.svg`
  width: 66px;
  height: auto;
  #Name {
    path {
      fill: ${header} !important;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 2em 0;
`;

const LogoWrapper = styled(Logo)`
  path {
    stroke: ${primary};
  }
`;

const Header = () => (
  <Wrapper>
    <HeaderWrapper>
      <Link to="/">
        <LogoWrapper viewBox="0 0 411.15 280.24">
          <path
            d="M75.19 153.32h70.42v108.24H75.19z"
            fill="none"
            stroke="#fcda00"
            strokeMiterlimit="10"
            strokeWidth="3px"
            transform="rotate(-37.07 110.41278394 207.44272625)"
          />
          <path
            d="M272.6 97.04h70.42v174.52H272.6z"
            fill="none"
            stroke="#fcda00"
            strokeMiterlimit="10"
            strokeWidth="3px"
            transform="rotate(-19.62 307.81526332 184.3218472)"
          />
          <path
            d="M136.99 6.03h70.42v264.81h-70.42z"
            fill="none"
            stroke="#fcda00"
            strokeMiterlimit="10"
            strokeWidth="3px"
            ransform="rotate(-.4 171.4066404 138.10931233)"
          />
          <path
            d="M210.19 6.11h70.42v264.18h-70.42z"
            fill="none"
            stroke="#fcda00"
            strokeMiterlimit="10"
            strokeWidth="3px"
            transform="rotate(11.37 245.36460002 138.19644058)"
          />
          <g id="Name">
            <path
              d="M38.4 62.43V109q0 8.79-4.9 13.58t-14.3 4.8q-9 0-13.39-4.53T0 109.88l11.88-2.47c.43 3.23 1.19 5.46 2.29 6.67a6.19 6.19 0 0 0 4.83 1.83 6.33 6.33 0 0 0 4.61-1.65q1.7-1.65 1.69-6V73H8.23V62.43zM60.71 126.24V62.43h39.49v11.43H73.78v14.35h22.4v11.43h-22.4v15.18h26.42v11.42zM121 126.24V62.43h38.39v11.43H134v14.35h21.5v11.43H134v26.6zM178.32 126.24V62.43h38.39v11.43h-25.32v14.35h21.49v11.43h-21.49v26.6zM248.77 126.24h-13.08V62.43h27.61q8.59 0 13.07 5.4t4.48 14.44a24.43 24.43 0 0 1-2.65 11.88 14.31 14.31 0 0 1-7.86 6.77l11.15 25.32h-14.17l-9.87-24.13h-8.68zm12.89-35a6.08 6.08 0 0 0 4.16-1.33q1.5-1.32 1.5-4.61v-5.5q0-3.28-1.5-4.61a6.08 6.08 0 0 0-4.16-1.33h-12.89v17.37zM301.27 126.24V62.43h39.49v11.43h-26.42v14.35h22.4v11.43h-22.4v15.18h26.42v11.42zM376.93 126.24v-24l-19.47-39.81h14.26l11.34 26.15h1.46l11-26.15h14L390 102.2v24zM38.49 179.92H17.28v26.6H4.21v-63.81h13.07v25.78h21.21v-25.78h13.07v63.81H38.49zM69 206.52v-63.81h39.49v11.43H82.11v14.35h22.4v11.43h-22.4v15.17h26.42v11.43zM137.32 206.52h-13.07v-63.81h27.6q8.6 0 13.08 5.4t4.48 14.44a24.43 24.43 0 0 1-2.66 11.88 14.25 14.25 0 0 1-7.86 6.77l11.16 25.32h-14.17L146 182.39h-8.68zm12.89-35a6.06 6.06 0 0 0 4.16-1.33c1-.88 1.51-2.42 1.51-4.61v-5.49c0-2.19-.51-3.73-1.51-4.62a6.11 6.11 0 0 0-4.16-1.32h-12.89v17.37zM197.86 206.52h-13.07v-63.81h27.61q8.58 0 13.07 5.4t4.53 14.44a24.43 24.43 0 0 1-2.65 11.88 14.31 14.31 0 0 1-7.86 6.77l11.15 25.32h-14.22l-9.87-24.13h-8.69zm12.89-35a6 6 0 0 0 4.16-1.33q1.51-1.32 1.51-4.61v-5.49q0-3.29-1.51-4.62a6.09 6.09 0 0 0-4.16-1.32h-12.89v17.37zM245.33 206.52v-63.81h39.5v11.43h-26.42v14.35h22.39v11.43h-22.39v15.17h26.42v11.43zM313.61 206.52h-13.07v-63.81h27.61q8.6 0 13.07 5.4t4.48 14.44a24.43 24.43 0 0 1-2.65 11.88 14.31 14.31 0 0 1-7.86 6.77l11.15 25.32h-14.17l-9.87-24.13h-8.69zm12.89-35a6 6 0 0 0 4.16-1.33q1.51-1.32 1.51-4.61v-5.49q0-3.29-1.51-4.62a6.09 6.09 0 0 0-4.16-1.32h-12.89v17.37zM398.26 206.52l-3.93-15.63h-19.57l-3.93 15.63h-12.52l18.1-63.81h16.64l18.1 63.81zm-11.06-40.86l-2-11.06h-1.46l-2 11.06-3.74 14.72h13.17z"
            />
          </g>
        </LogoWrapper>
      </Link>
      <Nav />
    </HeaderWrapper>
  </Wrapper>
);

export default Header;
