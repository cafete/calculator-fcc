import React, { Component } from "react";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import "./App.css";

class App extends Component {
  state = {
    display: ""
  };

  handleDisplay = (val = "") => {
    if (this.state.display === "Error") {
      this.setState({ display: "Error" });
    } else {
      this.setState({ display: val });
    }
  };

  handleClear = () => {
    this.setState({ display: "" });
  };

  handleDelete = () => {
    let a = this.state.display;
    let b = a.split("");
    b.pop();
    let c = b.join("");
    this.setState({ display: c });
  };

  handleInput = val => {
    if (val === ".") {
      if (this.state.display[this.state.display.length - 1] === ".") {
        return;
      } else {
        const newDisplay = this.state.display + val;
        this.setState({ display: newDisplay });
      }
    } else {
      const newDisplay = this.state.display + val;
      this.setState({ display: newDisplay });
    }
  };

  handleResult = () => {
    try {
      let a = this.state.display.replace(/^0+/, "");
      this.handleDisplay(eval(a));
    } catch (e) {
      this.handleDisplay("Error");
    }
  };

  render() {
    return (
      <div className="box">
        <Display value={this.state.display} />
        <Keyboard
          onInput={this.handleInput}
          onResult={this.handleResult}
          onClear={this.handleClear}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
