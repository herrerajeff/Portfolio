import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Loader = () => (
  <LoaderWrapper>
    <p>Loading...</p>
  </LoaderWrapper>
);

export default Loader;
