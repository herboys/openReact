import React from './React';

const ReactDOM = React
let backAndTextColor = {
    backgroundColor:'red',
    color:'red',
    fontSize:40
}
// /** @jsx React.createElement */
const dome = (
    <h1  style={backAndTextColor}>Hi React</h1>
)

// const element01 = React.createElement("h1", {style: {color: "red"}}, "Hi React")
const element=React.createElement(dome)
console.log(element,'999')
// console.log(React.createElement(dome), element, 'dome')
ReactDOM.render(element, document.getElementById("root"))

//
// import React from "react";
// import {createRoot} from 'react-dom/client';
//
// const demo = React.createElement("h1", {style: {color: "red"}}, "Hi React")
// const root = createRoot(document.getElementById('root'))
// console.log(root)
// root.render(demo);
