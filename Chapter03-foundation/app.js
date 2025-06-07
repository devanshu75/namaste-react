import React from "react";
import ReactDOM from "react-dom/client";

// React create.Element => Object

const Heading = () =>
  React.createElement("h1", { id: "heading" }, "Namaste React");

const JsxHeading = () => (
  <div className="container">
    <Heading />
    <h1 id="heading">Namaster React using JSX</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading />);
