# IGNITING APP 

### What is NPM ?
- It is the default package manager for node.js runtime environment.
- It is tool used  manage project dependencies, Allowing developers to update, install and remove
  libraries.
- NPM is the large online repository where developers can discover and share libraries.
- NPM provides CLI (Command Line Interface) for interacting with NPM 

### What is Bundler ? 
- Bundler is the tool that allows developer to package their code in one single file.
- This bundle can be used to run the application in the browser.
- Bundlers are used to reduce the size of the code and improve the performance of the application.
- Common bundlers are Parcel,Webpack.

#### Pros of using bundler
- **Optimization** - Bundler allows us to optimize the our application by minifying,compressing and
 tree shaking your code. which makes it faster to load and run.
- **Asset Management** - Bundler can handle different types of assests, such as images,fonts,styles,
 It allows transpile code into javascript,scss or sass.
- **Code Splitting** - It helps to split the code into multiple chunks that can be loaded on demand, Which make our application more efficient by loading only necessary code.
- **Modularity** - It uses modular approach in our code by using **import/export** statement to organize our code which makes it easy to reuse and manage.
- **Cross Browser Compatibility** - Some bundlers provide cross-browser compatibility through
 a set of loaders, Which makes the code works well in differnet browser 

### Cons of using bundlers
 - **Complexitity** - The configurations and setup of a bundler can be more complex, it may require more time to understand.
 - **Performance Cost** - Bundler can slow down development because they take time to process and package your code. This can be noticeable working on large projects or using features like code
 splitting.
- **Additional Dependency** - We have to maintain and update the bundler and its configuration.
- **Learning Curve** - We have to spend extra time to get familiar with the bundler with its features and how to set it up properly.
- **Debugging** - Debugging can be more difficult when using bundler because the code which is used in the browser are more minified and make it harded to understand.

### What is Parcel / Webpack ? Why do we need it?
Parcel and Webpack are the bunlders used in web development to combine various assest **(Javascript,CSS,Images)** etc.They are essential managing dependencies,Optimize Code,Improving loading times.
Parcel is known for its ease of use and zero configuration, While Webpack offers extensive customization option.
## Why do we need them? 
- **Dependency Management** - Webpack and Parcel help manage dependencies between different parts of a web application, ensuring that all necessary files are included in the final bundle. 
- **Code optimization** - They can optimize code by minifying it, removing unused code (tree-shaking), and splitting it into smaller chunks (code splitting) for faster loading times and better performance. 
- **Transpilation** - They can transform modern JavaScript and CSS features into versions that are compatible with older browsers, ensuring broader compatibility. 
- **Asset Handling** - They can handle various assets, including images, fonts, and stylesheets, allowing you to bundle them together with JavaScript. 
- **Development Experience** - Parcel and Webpack provide development servers with live reloading and hot module replacement, making the development process faster and easier. 
- **Production Builds** - They can generate optimized production builds, including minification and other optimizations, to improve performance. 

### What is .parcel-cache?
.parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

### What is NPX ? 
NPX is **Node Package Execute** It comes with the NPM version above 5.2.0, It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

### What is difference between `dependencies` vs `devDependencies`
- **Dependencies** - dependencies are libraries that your project needs in order to run in production. These are required for the core functionality of your application and must be installed for your application to work properly.
- **devDependencies** - dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. 

### What is Tree Shaking?
Tree shaking is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

### What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
1 HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.
2 File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
3 Minification - Minification is the process of minimizing code and markup in your web pages and script files.
4 Image optimization
5 Caching While development

### What is `.gitignore`? What should we add and not add into it?
The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file.

###  What is the difference between `package.json` and `package-lock.json`
`package.json:`
- This file is mandatory for every project
- It contains basic information about the project
- Application name/version/scripts 

`package-lock.json:`

- This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
- It is generated after an npm install
- It allows future devs & automated systems to download the same dependencies as the project.
- it also allows to go back to the past version of the dependencies without actual ‘committing -  the node_modules folder.
- It records the same version of the installed packages which allows to reinstall them. Future installs will be capable of building identical description tree.
~ or ^ in **package.json** file : These are used with the versions of the package installed.

For example in package.json file:

```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
 ```
~ : Approximately equivalent to version, will update you to all future patch versions, without incrementing the minor version.
^ : Compatible with version, will update you to all future minor/patch versions, without incrementing the major version.
If none of them is present, that means only the version specified in package.json file is used in the development.

###  Why should I not modify `package-lock.json`?
package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

### What is `node_modules` ? Is it a good idea to push that on git?
 node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). Don't push node_modulesin github because it contains lots of files(more than 100 MB), it will cost you memory space.
 
 ### What is the dist folder?
 The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
 
 ### What is browserslist?
 Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
 
 










