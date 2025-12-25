import React from "react";

const App = () => {
  function btnClick() {
    console.log("button is clicked");
  }

  // function mouseEnter() {
  //   console.log("mouse Entered");
  // }

  function inputChanging(val){
    console.log(val);
  }

  function pageScrolling(val){
    if(val>0)
    console.log('positive scrolling');
    else
      console.log('negative scrolling');     
  }
  return (
    <div>
      {/* <button  onClick={()=>{
        console.log('Button clicked');       
      }}>Click here</button> */}

      {/* <button onMouseEnter={mouseEnter} onClick={btnClick}>
        Click here
      </button> */}

      {/* <input onChange={function(elem){
          // console.log(elem.target.value);          
            inputChanging(elem.target.value)
      }} 
      type="text" placeholder="Enter Name"/> */}

      {/* <div onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }} className="box"></div> */}

      <div onWheel={(elem)=>{
        // console.log(elem.deltaY);        
          pageScrolling(elem.deltaY)
      }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;
