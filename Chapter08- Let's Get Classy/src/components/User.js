import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Mumbai</h3>
      <h4>Contact: @devanshurana75</h4>
    </div>
  );
};

export default User;
