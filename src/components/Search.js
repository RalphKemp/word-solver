import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const Fields = styled.div`
  display: flex;
  * {
    margin-right: 20px;
    margin-top: 20px;
    width: 40%;
    height: 30px;
    font-size: 16px;
    padding-left: 6px;
    outline-color: blue;
  }
`;

const Label = styled.label`
  font-size: 20px;
`;

const Form = styled.form`
  height: 80px;
  width: 80%;
`;

const Button = styled.button`
  idth: 155px;
  height: 42px;
  background-color: green;
  color: white;
  margin-top: 20px;
  font-size: 16px;
`;

class Search extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, setWords } = this.props;
    return (
      <Form
        onSubmit={handleSubmit(values => setWords(values))}
        autoComplete="off"
      >
        <Label>Enter your two words:</Label>
        <div>
          <Fields>
            <Field
              name="firstWord"
              component="input"
              type="text"
              placeholder="First Word"
            />
            <Field
              name="secondWord"
              component="input"
              type="text"
              placeholder="Second Word"
            />
          </Fields>
          <div>
            <Button type="submit" disabled={pristine || submitting}>
              Submit
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default connect(
  null,
  actions
)(
  reduxForm({
    form: 'search'
    // onSubmitSuccess: afterSubmit
  })(Search)
);
