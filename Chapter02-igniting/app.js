import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement("div", { id: "parent" }, [
    
  React.createElement("div", { id: "child" }, [
    React.createElement("H1", {}, "Hello From H1 Tag"),
    React.createElement("h2", {}, "Hello from h2 Tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
