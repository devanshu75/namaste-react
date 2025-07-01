import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About class Component</h1>
        <div>
          LoggedInUser User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl text-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>Hello World</h2>
        <UserClass name={"First"} location={"Mumbai"} />
        <UserClass name={"Second"} location={"USA"} />
      </div>
    );
  }
}

export default About;
