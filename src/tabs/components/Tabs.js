import React, { Component } from "react";
import PropTypes from "prop-types";
import TabPane from "./TabPane";
import TabBody from "./TabBody";

export const Tab = ({ title, children }) => <div tab={title}>{children}</div>;

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

class Tabs extends Component {
  state = { activeTab: 0 };

  componentDidMount = () => {
    //bind arrow-key event.type to keydown and append to document
    document.addEventListener("keydown", this.handleKeyPress, false);
    //Be able to fire focus as soon as window loads
    window.focus();
  };

  componentWillUnmount = () =>
    //un-bind arrow-key event.type to keydown and append to document
    document.removeEventListener("keydown", this.handleKeyPress, false);

  handleClickTabItem = ({ target: { id } }) =>
    this.setState({ activeTab: ~~id });
  //set focus to element when tabbing with arrow keys
  onFocus = (e, keyCode) =>
    keyCode === 40
      ? document.getElementById("section" + e).focus()
      : document.getElementById(e).focus();

  //arrow key event handler
  handleKeyPress = ({ keyCode }) => {
    if (keyCode === 37 || keyCode === 39 || keyCode === 40) {
      this.setState((prevState, prevProps) => {
        //If arrow-left key go backworards otherwise proceed forward with right arrow
        const nextTab =
          keyCode === 37 ? prevState.activeTab - 1 : prevState.activeTab + 1; //ternary operator to go foward or backwards
        return nextTab >= 0 && nextTab < prevProps.children.length
          ? { activeTab: nextTab }
          : null; //don't do anything if less then 0
      });
      //add focus to tab or section
      this.onFocus(this.state.activeTab, keyCode);
    }
  };

  render = () => {
    const { activeTab } = this.state;
    const { children } = this.props;
    return (
      <div className="tabbed">
        <ul role="tablist">
          {/*itteriate through tabs and set accordingly*/}
          {children.map(({ props }, key) => (
            <TabPane
              key={key}
              activeTab={activeTab}
              onClickTabItem={this.handleClickTabItem}
              id={key}
              {...props}
            />
          ))}
          <div className="tab-content">
            {/*itteriate through content and set accordingly*/}
            {children.map(({ props }, key) =>
              key === activeTab ? (
                <TabBody key={key} id={key} {...props} />
              ) : null
            )}
          </div>
        </ul>
      </div>
    );
  };
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired
};

export default Tabs;
