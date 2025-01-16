// import { useState, useEffect } from "react";

// const App = () => {
//   count [count,setcount]= useState(0);
//   count [multi,setmulti]= useState(0);


//   useEffect(()=>{
//     setMulti((count*2));
//   },[count])
//   return (
//     <>

//       <h1>my app:{count}</h1>
//       <h2>multiplication:{multi}</h2>
//       <button onClick={()=>{setcount(count+1)}}>click here</button>
//     </>
//   )
// }

// export default App
import { useState } from "react";

const App = () => {
    const [name, setName]=useState("")
    const [city, setCity]=useState("")
  return (
    <>
    <h1>Application form</h1>
    Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /> <br />
    Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/> <br /> <br />
    <button>View Data</button>
    </>
  )
}

export default App;