import React from 'react';
import Search from './Search';
import styled from 'styled-components';

const MainInputsDiv = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: #f1ecec;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    height: 100vh;
    width: 50vw;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  margin-bottom: 30px;
`;

const Inputs = () => {
  return (
    <MainInputsDiv>
      <SearchContainer>
        <Search />
      </SearchContainer>
    </MainInputsDiv>
  );
};

export default Inputs;
