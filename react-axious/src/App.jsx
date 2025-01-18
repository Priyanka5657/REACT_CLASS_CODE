import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [myData, setData]= useState([])
  const loadData =()=>{
    let api="http://localhost:3000/students";
    axios.get(api).then((res)=>{
      setData(res.data)
      console.log(res.data);
    });
  }
    useEffect(()=> {
      loadData();
    },[]);

  const ans = myData.map((key)=>{
    return(
      <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
      
    </tr>
      </>
    )
  })
  return (
    <>
    <h1>hello cybrom</h1>
    <table border= "1">
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>Fees</th>
          <th>Fees</th>
        </tr>
        {ans}
      </thead>
    </table>
      
    </>
  )
}

export default App;
