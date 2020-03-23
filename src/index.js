import React, { Component } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 };
    this.liked = false;
    this.error = "";
  }

  like = () => {
    fetch("http://localhost:3002/")
      .then(data => data.json())
      .then(r => {
        console.log(r);
        if (r) {
          this.setState(() => ({ error: "" }));
          if (!this.liked) {
            this.liked = true;
            this.setState(({ count }) => ({ count: count + 1 }));
            return;
          }
          this.liked = false;
          this.setState(({ count }) => ({ count: count - 1 }));
        } else this.setState(() => ({ error: "impossible to click" }));
      });
  };

  render() {
    const { count, error } = this.state;
    return (
      <React.Fragment>
      <button
        type="button"
        onClick={this.like}
        className={cx("like-button", { liked: this.liked })}
      >
        Like | <span className="likes-counter">{count}</span>
      </button>
      <p>{error}</p>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
