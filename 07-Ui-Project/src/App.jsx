import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:'orange',
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:'lightseagreen',
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:'royalblue',
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:'pink',
      tag: "Underworked",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:'black',
      tag: "Undermotivated",
    }
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
