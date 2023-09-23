// eslint-disable-next-line
import classes from "./App.module.css";
import Cards from "./Cards";
import Forms from "./Forms";
import React, { useState } from "react";
function App() {
  const [curValue, setValue] = useState(0);
  function valueHandler(value) {
    const sum = value.bill * (1 + value.tip / 100);
    setValue(sum);
  }
  return (
    <div className={classes.container}>
      <Cards>
        <Forms getValue={valueHandler} />
        <h1>Total: {curValue.toFixed(0)}$</h1>
      </Cards>
    </div>
  );
}

export default App;
