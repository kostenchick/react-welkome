import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import * as MyMath from "./components/Math";

console.log(MyMath.sum(3, 3));
const component = React.createElement(Counter);
