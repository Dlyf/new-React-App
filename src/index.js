// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client"

// const React = require('react'); => CommonJS import statement 
// Create a react component
const App = function() {
    return <div>Hi there!</div>
}

// Take the react component and show it on the screen
// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
