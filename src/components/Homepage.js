import React from 'react';
import Inputs from './Inputs';
import Results from './Results';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  justift-content: center;
  align-items: center;
`;

const Homepage = () => {
  return (
    <MainDiv>
      <Inputs />
      <Results />
    </MainDiv>
  );
}

export default Homepage;
