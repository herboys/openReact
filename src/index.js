import React from './React';

const ReactDOM = React

const demo = React.createElement("h1", {style: {color: "red"}}, "Hi React")
ReactDOM.render(demo, document.getElementById("root"))

//
// import React from "react";
// import ReactDOM from 'react-dom';
// const demo = React.createElement("h1", {style: {color: "red"}}, "Hi React")
// ReactDOM.render(demo, document.getElementById('root'));
