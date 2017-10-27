1.What is React JS? How does it differ from other JavaScript Frameworks?

* 1. React is a Javascript library for building user interfaces. It allows developers to create large web-applications that use data and can change overtime without reloading or refreshing the page.
React completely takes care of managing the DOM by using called the Virtual DOM. Unlike other frameworks, we can do everything in react by working with Components instead of Models, views, and controllers. Another thing that makes React unique is the One day data flow structure.

* 2. React Component Lifecycle:
There are 4 phases in a react component lifecycle:
a. Initialization: The getInitialState method enables to set the initial state value, that is accessible inside the component via this.state. This is the part of the lifecycle where props and state values are interpreted to create the correct output. 
b. Change of state: State changes will trigger a number of methods. Some of them are explained below.
c. Props changes: componentWillReceiveProps() is called when the props have changed. It enables to update the state depending on the existing and upcoming props, without triggering another rendering
d. Unmounting: componentWillUnmount() function is called before the component is removed from the DOM

Few methods that are part of the component lifecycle are:
a. componentWillMount(): cthis function is invoked immediately before mounting occurs. Its called before the render function. 
b. render(): This method is important to run react components. When this function is called, it examines props and state properties of the class and returns one of react elements, strings, numbers, null, boolean or portals.	
c. componentDidMount(): This function is invoked immediately after a component is mounted. It initializes the DOM nodes.

* 3. A stateful component has some state in it. It uses the state to render its elements. It needs to respond to any changes in the state.
Presentation components are solely concerned with how things look. These components receive all data/callbacks through props.

* 4. Three arguments that are passed into the React.createElement() function are:
a.type
b. [props]
c. [...children]

The type argument is either a tag name string (such as 'div' or 'span') or a React component type ( such as a class or a function).