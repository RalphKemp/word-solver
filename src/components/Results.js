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
    min-height: 100vh;
    width: 50vw;
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
  justify-content: flex-start;
`;

const LadderStep = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Blob = styled.div`
  background-color: black;
  padding: 10px;
`;

class Results extends Component {
  render() {
    return (
      <MainResultsDiv>
        <Title>currently we're trying to go from JINX to BULL.</Title>
        {this.props.words ? (
          <Words>
            {puzzleSolver(
              this.props.words.firstWord,
              this.props.words.secondWord,
              data
            ).map(x => {
              return (
                <LadderStep key={x}>
                  {x.map(y => (
                    <div>
                      {!Array.isArray(y) ? (
                        <Blob>{y}</Blob>
                      ) : (
                        <Blob
                          style={{
                            backgroundColor: 'green',
                            marginBottom: '20px'
                          }}
                        >
                          {y}
                        </Blob>
                      )}
                    </div>
                  ))}
                </LadderStep>
              );
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
