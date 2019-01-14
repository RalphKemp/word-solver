import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import uuidv1 from "uuid/v1";

const MainResultsDiv = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: blue;
  color: white;
`;

class Results extends Component {

  componentDidMount() {
    const words = this.props.words.results;
    console.log(words);

  }

  render() {

    return (
      <MainResultsDiv>
        { this.state.words ? (<div>{words[0]}</div>) : null}
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
