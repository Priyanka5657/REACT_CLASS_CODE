// const name = "piya";
// const city = "bhopal";
// const age = 20;
// const sub = <ol>
//   <li>php</li>
//   <li>python</li>
//   <li>java</li>
//   <li>dbms</li>
//   <li>jango</li>

// </ol>


const App =()=>{
  return(
    <>
    <h1>i am {name} mehra  from {city} we learn react js  my {age} year old my {sub} </h1>


    <h1>Application form</h1>
    Enter name : <input type="text"/>
    <br/>
    Enter city : <input type="text"/>
    <br/>

    Enter college : <input type="text"/>
    <br/>

    Enter dob : <input type="text"/>
    <br/>

    Enter gmail : <input type="text"/>
    <br/><br/>

    <input type="button" value="save"/>




    <br />
    <h1 className="data">Welcome to cybrom Bhopal</h1>
    </>
  )
}
export default App;