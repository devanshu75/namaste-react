import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name,"Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name,"Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/devanshu75");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name,"Child Render");

    const { name, location, login, avatar_url } = this.state.userinfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default UserClass;
