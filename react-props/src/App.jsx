import Cybrom from "./Cybrom";
import Mycollege from "./Mycollege";
import Studata from "./Studata";
const Data = [{

  name: "priyanka",
  rollnumb: 43,
  clgname: "radharaman",
  clgadress: "bhopal",

},

{
  name: "PRIYA",
  rollnumb: 24,
  clgname: "MPU",
  clgadress: "KOTA",
},
{
  name: "KIRAN",
  rollnumb: 63,
  clgname: "IES",
  clgadress: "JABALPUR",
},

{
  name: "diya",
  rollnumb: 67,
  clgname: "LNCT",
  clgadress: "INDORE",
}

]

let ans = Data.map((key) => <Studata Myname={key.name} />)








// const StudentInfo = {
//   name: "priyanka",
//   rollnumb: 43,
//   clgname: "radharaman",
//   clgadress: "bhopal",

// }
const App = () => {
  return (
    <>
      {/* <h1>hello</h1> */}
      {/* <Mycollege Myname={StudentInfo.name} city={StudentInfo.rollnumb} clgname={StudentInfo.clgname} myadd={StudentInfo.clgadress} /> */}


      {/* <Cybrom /> */}
      {/* <Data /> */}
      {ans}
    </>
  )
}

export default App;