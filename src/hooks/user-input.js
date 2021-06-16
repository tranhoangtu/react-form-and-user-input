import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouch;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouch(true);
  };

  const inputBlurHandler = (e) => {
    setIsTouch(true);
  };

  const reset = () => {
    setIsTouch(false);
    setEnteredValue("");
  };

  return {
    enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
