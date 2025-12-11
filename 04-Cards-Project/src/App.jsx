import React from "react";
import Card from "./Components/card";

const App = () => {

  // const arr = ['Devashish','Harrish','Soham','Krishna','Uttam'];

  // const obj = [
  //   {
  //     user:'Dev',
  //     age: 20
  //   },
  //   {
  //     user:'karan',
  //     age: 26
  //   },
  //   {
  //     user:'Mohan',
  //     age: 34
  //   }
  // ]
  // // console.log(str)
  // obj.map((ob)=>{
  //   console.log(ob.user);
  // })
  
  const jobOpenings = [
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    "companyName": "Amazon",
    "datePosted": "5 days ago",
    "post": "Software Development Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 58,
    "location": "Seattle, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
    "companyName": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 72,
    "location": "Cupertino, USA"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    "companyName": "Netflix",
    "datePosted": "10 days ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 80,
    "location": "Los Gatos, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
    "companyName": "Google",
    "datePosted": "3 weeks ago",
    "post": "Data Scientist",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 68,
    "location": "Mountain View, USA"
  },
  {
    "brandLogo": "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    "companyName": "Meta",
    "datePosted": "1 week ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": 55,
    "location": "Menlo Park, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsx0cmENacsYu8Z3kwcrZJRqc8oFsWe2n3Q&s",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 62,
    "location": "Redmond, USA"
  },
  {
    "brandLogo": "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    "companyName": "Tesla",
    "datePosted": "6 days ago",
    "post": "Machine Learning Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 75,
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OXa58AqOOglVnI_pMPuw-TTkB0TSp1j28Q&s",
    "companyName": "Oracle",
    "datePosted": "10 weeks ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": 48,
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://cdn.iconscout.com/icon/free/png-256/free-ibm-logo-icon-svg-download-png-2284974.png?f=webp",
    "companyName": "IBM",
    "datePosted": "8 days ago",
    "post": "AI Research Intern",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay": 30,
    "location": "New York, USA"
  },
  {
    "brandLogo": "https://fabrikbrands.com/wp-content/uploads/Nvidia-Logo-History-1-1155x770.png",
    "companyName": "NVIDIA",
    "datePosted": "2 days ago",
    "post": "GPU Software Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": 85,
    "location": "Santa Clara, USA"
  }
]


  return (
    <div className="parent">
      {/* <Card /> */}
      {jobOpenings.map((elem,idx)=>{
        console.log(idx);
        
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} location={elem.location} />
        </div>
      })}
    </div>
  );
};

export default App;
