import React, { useEffect, useState } from "react";

const App = () => {
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){
  //   console.log('use effect is running...');
  // },[num])

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(
    function () {
      aChanging();
      console.log("use effect is running...");
    },
    [a],
  );

  useEffect(
    function () {
      bChanging();
      console.log("use effect is running...");
    },
    [b],
  );

  function aChanging() {
    console.log("The value of a is Changed");
  }

  function bChanging() {
    console.log("The value of b is changed");
  }

  return (
    <div>
      {/* <h1>Value of num is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}
      >
        Hover
      </button> */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
