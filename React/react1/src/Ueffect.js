import { React, useState, useEffect } from "react";

let Ueffect = () => {
  let [count, setCount] = useState(0);

  let cHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`Counter is clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button className="btn btn-danger" onClick={cHandler}>
        Click Here
      </button>
    </div>
  );
};

export default Ueffect;
