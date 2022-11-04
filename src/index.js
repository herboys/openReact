import React from './React';

const ReactDOM = React
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


//
// import React from "react";
// import ReactDOM from 'react-dom';
// const demo = React.createElement("h1", {style: {color: "red"}}, "Hi React")
// ReactDOM.render(demo, document.getElementById('root'));
