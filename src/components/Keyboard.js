import React, { Component } from "react";

class Keyboard extends Component {
  state = {};
  render() {
    return (
      <div className="keys">
        <p>
          <input
            type="button"
            className="button gray"
            value="del"
            onClick={this.props.onDelete}
          />
          <input
            type="button"
            className="button gray"
            value="("
            onClick={() => this.props.onInput("(")}
          />
          <input
            type="button"
            className="button gray"
            value=")"
            onClick={() => this.props.onInput(")")}
          />
          <input
            id="divide"
            type="button"
            className="button pink"
            value="/"
            onClick={() => this.props.onInput("/")}
          />
        </p>
        <p>
          <input
            id="seven"
            type="button"
            className="button red"
            value="7"
            onClick={() => this.props.onInput("7")}
          />
          <input
            id="eight"
            type="button"
            className="button red"
            value="8"
            onClick={() => this.props.onInput("8")}
          />
          <input
            id="nine"
            type="button"
            className="button red"
            value="9"
            onClick={() => this.props.onInput("9")}
          />
          <input
            id="multiply"
            type="button"
            className="button pink"
            value="*"
            onClick={() => this.props.onInput("*")}
          />
        </p>
        <p>
          <input
            id="four"
            type="button"
            className="button red"
            value="4"
            onClick={() => this.props.onInput("4")}
          />
          <input
            id="five"
            type="button"
            className="button red"
            value="5"
            onClick={() => this.props.onInput("5")}
          />
          <input
            id="6"
            type="button"
            className="button red"
            value="6"
            onClick={() => this.props.onInput("6")}
          />
          <input
            id="substract"
            type="button"
            className="button pink"
            value="-"
            onClick={() => this.props.onInput("-")}
          />
        </p>
        <p>
          <input
            id="one"
            type="button"
            className="button red"
            value="1"
            onClick={() => this.props.onInput("1")}
          />
          <input
            id="two"
            type="button"
            className="button red"
            value="2"
            onClick={() => this.props.onInput("2")}
          />
          <input
            id="three"
            type="button"
            className="button red"
            value="3"
            onClick={() => this.props.onInput("3")}
          />
          <input
            id="add"
            type="button"
            className="button pink"
            value="+"
            onClick={() => this.props.onInput("+")}
          />
        </p>
        <p>
          <input
            id="zero"
            type="button"
            className="button red"
            value="0"
            onClick={() => this.props.onInput("0")}
          />
          <input
            id="decimal"
            type="button"
            className="button red"
            value="."
            onClick={() => this.props.onInput(".")}
          />
          <input
            id="clear"
            type="button"
            className="button red"
            value="C"
            onClick={() => this.props.onClear("")}
          />
          <input
            type="button"
            className="button orange"
            value="="
            id="equals"
            onClick={() => this.props.onResult()}
          />
        </p>
      </div>
    );
  }
}

export default Keyboard;
