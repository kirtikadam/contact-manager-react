import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    console.log("Component DID mount...");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }
  // componentWillMount() {
  //   console.log("Component WILL mount...");
  // }
  // componentDidUpdate() {
  //   console.log("Component DID UPDATE...");
  // }
  // componentWillUpdate() {
  //   console.log("Component WILL UPDATE...");
  // }
  // componentWillReceiveProps(nextProps, nextSteps) {
  //   console.log("Component WILL Receive Props...", nextProps, nextSteps);
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
