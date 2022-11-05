import React from './React';

const ReactDOM = React
<<<<<<< HEAD
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
=======
const element = (
    <div>
       <h1 style={{fontSize:"18px",color:"red"}}>hi,React</h1>
        <div>1</div>
    </div>
);
const demo = React.createElement(element)
console.log(demo,'拿到转化后的数据')
ReactDOM.render(demo, document.getElementById("root"))
// const demo1 = React.createElementOld("h1", {style:{color:"red"}}, "Hi React")
// console.log(demo1,'拿到转化后的数据')
// ReactDOM.render(demo1, document.getElementById("root1"))

>>>>>>> dc207d1aaa378c7cbaad86a177eec6a3349a6c6a

//
// import React from "react";
// import {createRoot} from 'react-dom/client';
//
// const demo = React.createElement("h1", {style: {color: "red"}}, "Hi React")
// const root = createRoot(document.getElementById('root'))
// console.log(root)
// root.render(demo);
