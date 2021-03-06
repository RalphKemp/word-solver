import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { data } from "../data/words";
import { puzzleSolver } from "../helpers/puzzleSolver";
import uuidv1 from "uuid/v1";

const MainResultsDiv = styled.div`
  min-height: 50vh;
  width: 100vw;
  background-color: #001b5a;
  color: white;
  display: flex;
  @media (min-width: 600px) {
    min-height: 100vh;
    width: 50vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

const Words = styled.div`
  margin: 20px 0px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LadderStep = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Blob = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #c2c537;
  color: black;
`;

const InputtedWord = styled(Blob)`
  background-color: green;
  color: white;
  font-size: 25px;
`;

class Results extends Component {
  render() {
    return (
      <MainResultsDiv>
        {this.props.words ? (
          <Words>
            <LadderStep>
              <InputtedWord>{this.props.words.firstWord}</InputtedWord>
            </LadderStep>
            {puzzleSolver(
              this.props.words.firstWord,
              this.props.words.secondWord,
              data
            ).map(x => {
              return (
                <div>
                  <LadderStep key={x}>
                    {x.map(y => (
                      <div key={uuidv1()}>
                        {Array.isArray(y) ? (
                          y.map(thing => {
                            return <Blob>{thing}</Blob>;
                          })
                        ) : (
                          <Blob>{y}</Blob>
                        )}
                      </div>
                    ))}
                  </LadderStep>
                </div>
              );
            })}
            <LadderStep>
              <InputtedWord>{this.props.words.secondWord}</InputtedWord>
            </LadderStep>
          </Words>
        ) : (
          <Title>
            For example: JINX to BULL, COSY to RINK, or DEAF to SOON.
          </Title>
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
