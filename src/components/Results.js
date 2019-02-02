import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { data } from '../data/words';
import { puzzleSolver } from '../helpers/puzzleSolver';

const MainResultsDiv = styled.div`
  min-height: 50vh;
  width: 100vw;
  background-color: blue;
  color: white;
  @media (min-width: 600px) {
    height: 100vh;
    width: 50vw;
  }
`;

const WordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

const Words = styled.div`
  margin: 20px 0px 0px 20px;
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
        <Title>currently we're trying to go from COSY to RINK.</Title>
        {this.props.words ? (
          <Words>
            {puzzleSolver(
              this.props.words.firstWord,
              this.props.words.secondWord,
              data
            ).map(x => {
              return <div key={x}>{x}</div>;
            })}
          </Words>
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
