import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { data } from "../data/words";
import { puzzleSolver } from "../helpers/puzzleSolver";

const MainResultsDiv = styled.div`
  min-height: 100vh;
  width: 50vw;
  background-color: blue;
  color: white;
`;

const WordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Results extends Component {
  renderWords(x, y) {
    return (
      <WordsContainer>
        <div>{x}</div>
        <div>{y}</div>
      </WordsContainer>
    );
  }

  render() {
    return (
      <MainResultsDiv>
        currently we're trying to go from COSY to RINK.
        {this.props.words ? (
          <div>
            {puzzleSolver(
              this.props.words.firstWord,
              this.props.words.secondWord,
              data
            ).map(x => {
              return <div key={x}>{x}</div>;
            })}
          </div>
        ) : null}
      </MainResultsDiv>
    );
  }
}

function mapStateToProps({ words }) {
  return { words };
}

export default connect(
  mapStateToProps,
  null
)(Results);
