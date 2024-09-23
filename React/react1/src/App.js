import logo from "./logo.svg";
import "./App.css";
// import Functional from "./functional";
// import Classcomp from "./Classcomp";
// import User from "./User";
// import Buttons from "./Buttons";

import Stateclass from "./Stateclass";
import Statefunc from "./Statefunc";
import Ueffect from "./Ueffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Stateclass />
      <Statefunc />
      <Ueffect />
    </div>
  );
}

export default App;
