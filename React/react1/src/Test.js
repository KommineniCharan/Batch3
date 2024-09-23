import { React, useState, useEffect } from "react";

let Test = () => {
  let [variable, setVariable] = useState(0);

  let counterHandler = () => {
    setVariable(variable + 1);
  };

  useEffect(() => {
    console.log(`Counter Clicks ${variable} times`);
  }, [variable]);

  return (
    <div>
      <h1>Counter : {variable}</h1>
      <button className="btn btn-primary btn-lg" onClick={counterHandler}>
        Counter
      </button>
    </div>
  );
};

export default Test;
