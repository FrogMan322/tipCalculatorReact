import classes from "./Forms.module.css";
import React, { useState } from "react";
function Forms(props) {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  function submitHandler(e) {
    e.preventDefault();
    props.getValue({ bill: parseInt(bill), tip: parseInt(tip) });
  }
  function billHandler(e) {
    setBill(e.target.value);
  }
  function tipHandler(e) {
    setTip(e.target.value);
  }

  return (
    <form className={classes["form__container"]} onSubmit={submitHandler}>
      <h1>Tip Calculator</h1>
      <p>Enter bill and tip percentage</p>
      <label htmlFor="bill">Bill:</label>
      <input
        onChange={billHandler}
        type="number"
        name="bill"
        id="bill"
        required
      />
      <label htmlFor="tip">Tip Percentage:</label>
      <input
        onChange={tipHandler}
        type="number"
        name="tip"
        id="tip"
        min="0"
        max="100"
        required
      />
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Forms;
