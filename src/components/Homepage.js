import React from 'react';
import Inputs from './Inputs';
import Results from './Results';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Homepage = () => {
  return (
    <MainDiv>
      <Inputs />
      <Results />
    </MainDiv>
  );
};

export default Homepage;
