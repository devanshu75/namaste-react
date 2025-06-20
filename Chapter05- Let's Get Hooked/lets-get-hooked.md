# Let's get Hooked!

## What is the difference between Named Export, Default export and \* as export?

- In JavaScript `export` statement is used in modules to expose variables, functions, or classes so that they can be accessed and used in other parts of the application or in separate files.

- By using the `export`, we can make certain parts of the code accessible
  outside the module.

- In JavaScript there are two main ways to export values: default exports,used for a single value per file, and named exports, allowing multiple exports per file.

1. Default Export

- A Default export is a way to share a single value,function, or class as the main thing from a file with other parts of your code.
- When you have a file that needs to be used in other parts of your application, you can mark one item in that file as the default export using the `export default `syntax.
- This means that when you import from that file in another part of your code, you don't need to use curly braces `{}` around the import statement.

```javascript
// 📂 math.js
const add = (a, b) => a + b;
export default add;

// 📂 main.js
import myAddFunction from "./math.js";
const result = myAddFunction(5, 10);
```

2. Named Export

- Named exports in JavaScript allow you to export multiple functions,
  variables, or classes from a single files as separate entities. Instead of exporting everything as single unit.

## What is the importance of config.js file?

`config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable. Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces. Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:

## What are React Hooks?

In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

## Why do we need useState Hook?

`useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the `initial state` as an argument and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
