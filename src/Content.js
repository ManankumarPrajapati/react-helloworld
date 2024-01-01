import React from "react";

const Content = (props) => {
  var n1 = parseInt(props.no1);
  var n2 = parseInt(props.no2);
  var c = parseInt(n1) + parseInt(n2);
  return (
    <div>
      <h1>{props.children}</h1>
      {/* <h1>Name: {props.fruits.name}</h1>
      <h1>Name: {props.fruits.color}</h1> */}

      <h1>First Value is {n1}</h1>
      <h1>Second Value is {n2}</h1>
      <h1>Total Value is {c}</h1>
    </div>
  );
};

export default Content;
