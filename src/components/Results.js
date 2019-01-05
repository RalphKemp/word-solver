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
  render() {
    const words = this.props.words.results;
    console.log(words);
    return (
      <MainResultsDiv>
        {words ? (
          <div>
            {words.map(x => {
              return <div key={uuidv1()}>{x.word}</div>;
            })}
          </div>
        ) : (
          <div>no</div>
        )}
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
