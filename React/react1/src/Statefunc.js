import { React, useState } from "react";

let Statefunc = () => {
  const [variable, setVariable] = useState("Hello");

  let gmngHandler = () => {
    setVariable("Good Morning");
  };

  let gafnHandler = () => {
    setVariable("Good Afternoon");
  };

  return (
    <div>
      <h1>Message: {variable}</h1>
      <button className="btn btn-primary" onClick={gmngHandler}>
        GM
      </button>
      <button className="btn btn-info" onClick={gafnHandler}>
        GA
      </button>
    </div>
  );
};

export default Statefunc;
