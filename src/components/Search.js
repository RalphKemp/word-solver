import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Field, reduxForm } from "redux-form";

class Search extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, setWords } = this.props;
    return (
      <form onSubmit={handleSubmit(values => setWords(values))} autoComplete='off'>
        <div>
          <label>First Name</label>
          <div>
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
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(
  reduxForm({
    form: "search"
    // onSubmitSuccess: afterSubmit
  })(Search)
);
