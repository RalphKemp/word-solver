import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { data } from '../data/words';
// import uuidv1 from "uuid/v1";

const MainResultsDiv = styled.div`
  height: 100vh;
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

  componentDidMount() {
    console.log(data)
  }

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
        {this.props.words ? (
          <div>
            {this.renderWords(
              this.props.words.firstWord,
              this.props.words.secondWord
            )}
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
