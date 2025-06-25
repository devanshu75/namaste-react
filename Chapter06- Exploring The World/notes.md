# Exploring the World

## What is a Microservice?

- Microservice is a small, loosely coupled service that is designed to perform a specific business function and each microservices can be developed deployed, and scaled independently.
- This architecture allow us to break large monolith application and
  decompose it into small manageable components/services. Also, it is
  considered as the building block of modern application.

## How do Microservices work?

Microservices break complex applications into smaller, independent services that work together, enhancing scalability, and maintenance.

1. Application are divided into self-contained services, each focused on a specific function, simplifying development and maintenance.

2. Each microservices handles a particular business feature, like user
   authentication or product management, allowing for specialized development.
3. Services interact via APIs, facilitating standardized information
   exchange and integration.

4. Different technologies can be used for each service, enabling teams
   to select the best tools for their needs.

5. Microservices can be updated independently, reducing risks during
   changes and enhancing system resilience.

## What is Monolithic architecture?

Monolithic architecture is a software design methodology that combines
all of an application's components into a single, inseparable unit.Under
this architecture, the user interface, business logic, and data access layers are all created, put into use, and maintained as one, unified unit.

## What is the difference between Monolith and Microservice?

| aspect          | Monolithic Architecture                             | Microservice Architecture                                                        |
| --------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| Architecture    | Single-tier architecture                            | Multi-tier architecture                                                          |
| Size            | Large, all components tightly coupled               | Small, loosely coupled components                                                |
| Deployment      | Deployed as a single unit                           | Individual services can be deployed independently                                |
| Scalability     | Horizontal scaling can be challenging               | Easier to scale horizontally                                                     |
| Development     | Development is simpler initially                    | Complex due to managing multiple services                                        |
| Technology      | Limited technology choices                          | Freedom to choose the best technology for each service                           |
| Fault Tolerance | Entire application may fail if a part fails         | Individual services can fail without affecting others                            |
| Maintenance     | Easier to maintain due to its simplicity            | Requires more effort to manage multiple services                                 |
| Flexibility     | Less flexible as all components are tightly coupled | More flexible as components can be developed, deployed, and scaled independently |
| Communication   | Communication between components is faster          | Communication may be slower due to network calls                                 |

## Why do we need a useEffect Hook?

The useEffect Hook allows you to perform side effects in your components.This Hook runs on every render but there is also a way of using a dependency array which we can control the effect of rendering.

It is used to perform actions such as:

- Fetching data from an API.
- Updating DOM directly.
- Cleaning up resources when a component unmounts.

```jsx
useEffect(() => {
  return () => {
    // Cleanup function(optional)
  };
}, [dependencies]);
```

## What is Optional Chaining?

Optional Chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null , it returns undefined instead of throwing an error. Optional Chaining (?.) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns undefined.

## What is Shimmer UI?

Shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load. Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

## What is the difference between JS expression and JS Statement?

A JS expression returns a value that we use in the application. for example:

```jsx
1 + 2; // expresses
"foo".toUpperCase(); // expresses 'FOO'
console.log(2); // logs '2'
isTrue ? true : false; // returns us a true or false value based on isTrue value
```

A Js Statement, does not return a value. for example

```jsx
let x; // variable declaration
if () { } // if condition
```

If we want to use JS expression in JSX, we have to wrap in {/_ expression slot _/} and if we want to use JS statement in JSX, we have to wrap in {(/_ statement slot _/)};

## What is Conditional Rendering? explain with a code example.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. for example:

```jsx
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```

## What is CORS?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

## What is async and await?

Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value. Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait. for example:

```jsx
// async function getRestaurant to fetch Swiggy API data
async function getRestaurants() {
  const data = await fetch("FOODFIRE_API_URL");
  const json = await data.json();
  // we get the Swiggy API data in json format
  console.log(json);
}
```

## What is the use of const json = await data.json(); in getRestaurants()?

The data object, returned by the await fetch(), is a generic placeholder for multiple data formats. so we can extract the JSON object from a fetch response by using await data.json(). data.json() is a method on the data object that lets you extract a JSON object from the data or response. The method returns a promise because we have used await keyword. so data.json() returns a promise resolved to a JSON object.
