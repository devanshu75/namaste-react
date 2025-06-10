# Laying the Foundation

## What is JSX ? 
JSX stands for JavaScript XML, It helps us to write HTML in JavaScript and place them
in DOM without any `createElement()` or `appendChild()`.
JSX converts HTML tags into React Element.
```jsx
Example 1: With JSX
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
```jsx
Example 2: Without JSX

const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

***JSX is converted into React Element which is then converted into HTMLElement during render.***

```React.createElement => Object => HTMLElement(render)```

### Expression in JSX 
With JSX you can write expression inside curly braces `{ }`.
The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

```
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```
**Using fragment to Insert multiple lines in JSX, A fragment looks like an empty HTML tag: <></>**

```
const myElement = <input type="text" />;
```

**Import Notes**
- JSX is not a part of ReactJs.
- JSX is not HTML in JS
- JSX - HTML like or XML- Like Syntax
- JSX is Different, React is Different
- JSX (transpiled) before it reaches the JS Engine

## Superpowers of JSX ? 
- We can write HTML like code in JavaScript.
- JSX converts HTML-like code into JavaScript objects, which are then used to update the DOM efficiently, leading to improved performance. 

##  Role of type attribute in script tag? What options can I use there?
The `type` attribute specifies the type of the script.
The `type` attribute identifies the content between the `<script>` and `</script>` tags.

**text/ecmascript** : this value indicates that the script is following the EcmaScript standards.
**module**: This value tells the browser that the script is a module that can import or export other files or modules inside it.
**text/babel** : This value indicates that the script is a babel type and required bable to transpile it.
**text/typescript**: As the name suggest the script is written in TypeScript.

##  {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
- `{TitleComponent}` : This value describes the TitleComponent as a javascript expression or a variable. The `{}` can embed a javascript expression or a variable inside it.
- `{<TitleComponent/>}`: This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the `{<  />}` expression.
- `{<TitleComponent></TitleComponent>}`: This is the long-hand version of the self-closing JSX tag. Use this when you want to add children:
```jsx
Syntax:
<TitleComponent>Hello</TitleComponent>
```