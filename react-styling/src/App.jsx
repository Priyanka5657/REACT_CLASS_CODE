import EmpData from "./EmpData";

const name =["priya","pankaj","priyanka","donjoh"];
// const ans= name.map((key)=>{
//   return(
//     <li>{key}</li>
//   )
// })
EmpData.map =((key)=>{
  return(
    <>
    <tr>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.department}</td>
      <td>{key.salary}</td>



    </tr>
    </>
  )


})


const App = () => {
  return (
    <>
    <h1>hello cybrom</h1>
    {/* <ol>{ans}</ol> */}
    
      
    </>
  )
}

export default App
