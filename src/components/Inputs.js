import React from "react";
import Search from "./Search";
import styled from "styled-components";

const MainInputsDiv = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  input {
    width: 30%;
    height: 20px;
    font-size: 20px;
  }
`;

const Inputs = () => {
  return (
    <MainInputsDiv>
      <Search />
    </MainInputsDiv>
  );
};

export default Inputs;
