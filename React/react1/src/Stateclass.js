import { React, Component } from "react";

class Stateclass extends Component {
  state = { message: "Hello" };

  gmHandler = () => {
    this.setState({ message: "Good Morning" });
  };

  gaHandler = () => {
    this.setState({ message: "Good Afternoon" });
  };

  render() {
    return (
      <div>
        <h1>Message: {this.state.message}</h1>
        <button className="btn btn-primary" onClick={this.gmHandler}>
          Good Morning
        </button>
        <button className="btn btn-secondary" onClick={this.gaHandler}>
          Good Afternoon
        </button>
      </div>
    );
  }
}

export default Stateclass;
