import React from "react";
import { Field, reduxForm } from "redux-form";

const Search = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstWord"
            component="input"
            type="text"
            placeholder="First Word"
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
};

export default reduxForm({
  form: "search" // a unique identifier for this form
})(Search);
