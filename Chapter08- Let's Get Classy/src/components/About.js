import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About class Component</h1>
        <h2>Hello World</h2>
        <UserClass name={"First"} location={"Mumbai"} />
        <UserClass name={"Second"} location={"USA"} />
      </div>
    );
  }
}

export default About;
