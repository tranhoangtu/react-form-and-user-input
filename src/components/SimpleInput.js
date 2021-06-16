import { useEffect, useRef, useState } from "react";
import useInput from "../hooks/user-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameIsNotValid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim().length > 0);

  const {
    enteredValue: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailIsNotValid,
    valueChangeHandler: mailInputChangeHandler,
    inputBlurHandler: mailInputBlurHandler,
    reset: resetMailInput,
  } = useInput((value) => value.trim().length > 0 && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid || !enteredMailIsValid) {
      return;
    }
    resetNameInput();
    resetMailInput();
  };

  const nameInputClass = !nameIsNotValid
    ? "form-control"
    : "form-control invalid";

  const mailInputClass = !mailIsNotValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameIsNotValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={mailInputClass}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="mail"
          value={enteredMail}
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
        />
        {mailIsNotValid && (
          <p className="error-text">
            E-mail must not be empty and includes '@' character
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
