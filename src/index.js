import React, { Component } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 };
    this.liked = false;
  }

  like = () => {
    if (!this.liked) {
      this.liked = true;
      this.setState(({ count }) => ({ count: count + 1 }));
      return;
    }
    this.liked = false;
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <button
        type="button"
        onClick={this.like}
        className={cx("like-button", { liked: this.liked })}
      >
        Like | <span className="likes-counter">{count}</span>
      </button>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
