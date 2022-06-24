import React from "react";
import ReactVivus from "react-vivus";
import svg from "./ramsvg.svg";
// import svg from 'https://raw.githubusercontent.com/tamilDev/TamilLetterLibary/master/0003.svg';

const MyComponent = () => (
  
  <ReactVivus
    id="svg"
    option={{
      file: svg,
      animTimingFunction: "EASE",
      type: "oneByOne",
      duration: 250,
      onReady: console.log,
    }}
    // style={{ height: '100px', width: '100px' }}
    callback={console.log}
  />
);
export default MyComponent;
