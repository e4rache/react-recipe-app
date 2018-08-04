import React, { Component } from "react";

class Loader extends Component {
  state = { charIndex: 0 };
  chars = ["[*   ]", "[ *  ]", "[  * ]", "[   *]", "[  * ]", "[ *  ]"];
  intervalId = undefined;

  incIndex() {
    const charIndex = (this.state.charIndex + 1) % 6;
    this.setState({ charIndex });
  }

  getChar() {
    return this.chars[this.state.charIndex];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.incIndex();
    }, 150);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const color = "#F00";

    const style = {
      display: "-webkit-flex",
      display: "flex",
      WebkitFlex: "0 1 auto",
      flex: "0 1 auto",
      WebkitFlexDirection: "column",
      flexDirection: "column",
      WebkitFlexGrow: 1,
      flexGrow: 1,
      WebkitFlexShrink: 0,
      flexShrink: 0,
      WebkitFlexBasis: "25%",
      flexBasis: "25%",
      maxWidth: "25%",
      height: "200px",
      WebkitAlignItems: "center",
      alignItems: "center",
      WebkitJustifyContent: "center",
      justifyContent: "center"
    };

    return (
      <div
        style={{
          boxSizing: "border-box",
          display: "-webkit-flex",
          display: "flex",
          WebkitFlex: "0 1 auto",
          flex: "0 1 auto",
          WebkitFlexDirection: "row",
          flexDirection: "row",
          WebkitFlexWrap: "wrap",
          flexWrap: "wrap",
          WebkitAlignItems: "center",
          alignItems: "center",
          WebkitJustifyContent: "center",
          justifyContent: "center"
        }}
      >
        <div style={style}>
          <h1 color={color}>
            <pre>{this.getChar()}</pre>
          </h1>
        </div>
      </div>
    );
  }
}

export default Loader;
