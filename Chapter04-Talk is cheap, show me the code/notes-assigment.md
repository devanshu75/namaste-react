# Chapter 04 - Talk is cheap, show me the code!

## Is JSX Mandatory in ReactJS ?

JSX is not a requirement for using React. It is upto us whether to use
Plain HTML or JSX.

```
//Plain HTML

const myElement = React.createElement('h1',{style:{color:"green"}},'I do no use JSX!');

const root = ReactDOM.createRoot(document.getElementByIDd('root));
root.render(myElement);

```

```
//JSX

const myElement = <h1>I Love JSX! </h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

```

As we can see the different between Plain HTML and JSX, We need to use
createElment method, then pass the element along with its style and its value.

JSX makes it easier by simply using the element tag just as we write HTML and passing its value.

Each JSX element is just syntatic sugar for calling
`React.createElement(component,props,...children)`,

To convert the JSX into React.createElement `Babel` is used for compilation.

## JSX Rules

There are few rules for JSX

1. A React component name must be capitalzed. Component
   names that do not begin with a capital letter are treated like
   built-in component.
2. JSX allows you to return only one element from a given component.
   This is known as parent element.
3. If we want to return multiple elements, We have to wrap it in
   single `<div></div>,<React.fragments><React.fragments/>,<></>`

   ```jsx
   const App = () => {
     return (
       <div>
         <h1>Hello World</h1>
         <p>Devanshu Here</p>
       </div>
     );
   };
   ```

4. Since JSX is closer to JavaScript to HTML, The ReactDOM uses the
   camelCase naming convention for HTML attribute names.For example:
   `tabIndex`,`onChange`, and so on.

5. `class` and `for` are reserved keywords in JavaScript, So use `className` and `forHTML` instead.

## Is ES6 mandatory for React?

ES6 is strictly not mandatory for React, It is highly recommended.
React leverages many ES6 features. We have to be familiar with new features like: Classes, Arrow Function, Variables(let,const,var).

## {TitleComponent} vs {<TitleComponent/> } vs {<TitleComponent></TitleComponent>} in JSX.

- `{TitleComponent}`: This value describes the TitleComponent as a javascript expression or a variable or React element. The {} can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. If component is written inside the {< />} expression.
- `<TitleComponent></TitleComponent> <TitleComponent /> and <TitleComponent></TitleComponent>` : are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components

## How can I write comments in JSX?

```
 {*/ comment */}
```

## What is <React.Fragment></React.Fragment> and <></> ?

Fragments let you group a list of children without adding extra nodes to the DOM.

```
//Syntax
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

## What is Virtual DOM?

The Virtual DOM is a lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing the direct manipulation
required on the real DOM. This process significantly enhances the
performances of web apps.

The virtual DOM is an in-memory representation of the real DOM elements.
Instead of interacting directly with the real DOM, which can be slow and
costly in terms of performances, React creates a virtual representation
of the UI components. This virtual representation is a lightweight
JavaScript Object that mirrors the structures of the real DOM.

## Process of how the Virtual DOM works:

1. Step 1 - Initial Rendering: When the app starts, the entire UI is
   represented as a Virtual DOM. React elements are created and rendered into the virtual structure.

2. Step 2 - State and Props Changes: as the states and props change in the app, React re-renders the affected components in the virtual DOM.

3. Step 3 - Comparison Using Diff Algorithm: React then uses a diffing
   algorithm to compare the current version of the Virtual DOM with the
   previous version. This process the difference (or "diffs") between the
   two versions.

4. Step 4 - Reconciliation Process: based on the difference identified, React determines the most efficient way to update the realDOM. Only the parts of the real DOM that need to be updated are changed, rather than
   re-rendering the entire UI.

5. Step 5 - Update to the Real DOM: finally, React applies the necessary changes to the real DOM. This might involved adding, removing, or updating elements based on the differences detected in step 3.

## Comparing the virtual DOM to the Real DOM

The real DOM is a built-in standard interface in browsers that
represents and interacts with HTML elements, from `Doctype` declaration
and the root `html` element to every other element in it.

This is in contrast to the virtual DOM, which uses a `diff algorithm` to compare the current and previous versions of updated to the DOM.
It only re-renders the parts of the UI that have changed, instead of the whole thing.

## Benefits of using Virtual DOM

- Simplified Development - The Virtual DOM lets you write code in a more
  declarative style.This means that instead of writing detailed instructions on how to update the UI, We can simply describe the UI should look like, and React takes care of the rest.

- Improved Performance - Direct manipulation of the real DOM is slow
  and can lead to performances issues, especially in complex application

- Enhanced User Experience - It provides better UX by ensuring that UI
  updates are smooth,responsive, and without full-page refreshes. Users
  are less likely to experience lag or jank, resulting in a more seamless interaction with the app.

- Cross-platform Development - Virtual DOM are not limited to web development only. React Native - a version of React for building cross-platform mobile apps - uses a similar approach. This increase
  productivity and reduces development time because you can reuse code
  across web and mobile platforms.

## Misconception About the Virtual DOM

1. `The Virtual DOM is a Browser Feature`: The virtual DOM is an abstraction implemented by React, not a browser feature. Browsers have the real DOM, which is the standard way to represent and interact with
   HTML documents.

2. `The Virtual DOM Replaces the Real DOM`: It does not real replace the
   real DOM, The browsers still use the Real DOM to render UI, but the updates are managed by the Virtual DOM.

3. `React is the Only Library and Framework that Uses the Virtual DOM`: React only popularized the concept of the virtual DOM, it is not the library or framework that uses it. Others framework like VueJs and SolidJS also use the virtual DOM to update the UI.

4. `The Virtual DOM Solved All Performance Problem`: It improves the performance, but it does not give all solution to all problems.s

5. `Virtual DOM and Shadow DOM are the Same`: The Virtual DOM and Shadow DOM are the same thing. The virtual DOM is lightweight copy of the Real DOM which React optimize UI Updates. On the other hand shadow DOM is a browser technology used to encapsulate the styles and structure of web component.

## What is Reconciliation in React?

It is the process through which React updates the Browser DOM and makes
React work faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update
of components. React stores a copy of Browser DOM which is called Virtual
DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing
Algorithm. React compares the Virtual DOM with Real DOM. It finds out the
changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This Process is Called Reconciliation.

## What is React Fiber?

React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

- Pause,resume, and restart rendering work on components as new updates come in
- Reuse previously competed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance.

## Why we need keys in React? When do we need keys in React?

Keys help React identify which items have changed,are added, or
are removed. The best way to uniquely identifies a list item among siblings. Most often we use `ID's` from our data as keys.When we don't have any `IDs` for rendered items, If there is no stable ID We may use **index** as the last option

```jsx
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

const todoItems = todos.map((todo, index) => (
  // Only do this if items have no stable IDs
  <li key={index}>{todo.text}</li>
));
```

- It is highly recommended not to used index as keys if the order of items may change.
- Keys used within arrays should be unique among their siblings.

## Can we use index as keys in React?

Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

## What is props in React?

props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

```jsx
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma" /> // name and tool are props
    </div>
  );
}
```

## What is Config Driven UI?

Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.
