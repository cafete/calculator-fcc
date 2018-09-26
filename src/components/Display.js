import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <div className="display" id="display">
        <input
          type="text"
          readOnly
          size="15.75"
          id="d"
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Display;
