import React, { Component } from "react";
import Status from "./Status";
import Button from "./Button";

class Tooltip extends Component {
  //set active-states defaults
  state = {
    isOpen: false,
    val: '',
    isFocus: false
  };
  timeOutId = null;

  componentDidMount = () => {
    //bind arrow-key event.type to keydown and append to document
    document.addEventListener("keydown", this.onBlurHandler, false);
  };

  componentWillUnmount = () =>
    //un-bind arrow-key event.type to keydown and append to document
    document.removeEventListener("keydown", this.onBlurHandler, false);

  onClickHandler = e => {
    let newValue = e.target.getAttribute("data-toggletip-content");
    this.setState(currentState => ({
      isOpen: !currentState.isOpen,
      val: newValue
    }));
  };

  onBlurHandler = e => {
    const eventType = e.type;
    console.log(eventType);
    this.timeOutId = setTimeout(() => {
      //check if blur event or esc key was fired
      if (eventType === "blur" || e.keyCode === 27) {
        this.setState({ isOpen: false });
        e.target.blur();
      }
    });
  };

  onFocusHandler = e => clearTimeout(this.timeOutId);

  render = () => {
    return (
      <div
        onBlur={this.onBlurHandler}
        onFocus={this.onFocusHandler}
        className="toggletip-container"
      >
        <Button
          onClick={this.onClickHandler}
          popup="true"
          label="more info"
          toolTip="This clarifies whatever needs clarifying"
          expanded={this.state.isOpen}
          content="i"
        />
        {/* ternary operator to check state of open or close */}
        {this.state.isOpen ? <Status val={this.state.val} /> : null}
      </div>
    );
  };
}

export default Tooltip;
