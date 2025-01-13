
// const display=()=>{
//   alert("welcome!!!!")
// }

// const myCybrom=(clg,e)=>{
// alert(`my college  ${clg}my event : ${e.type}`)
// }


const App = () =>{

//   const myName=(nm)=>{
//     alert(`my name:&{nm}`)
// const display=(e)=>{
//   let mynm = e.target.name;
//   let  myval = e.target.myval;
//   console.log(mynm,myval)
//   alert(`name: ${e.target.name} value : ${e.target.value}`)


const getVal=(e)=>{
  let name=e.target.name;
  let value= e.target.value;
  console.log(e);
  console.log({[name]:value});
}


   



  
  return (
    <>
    {/* <h1>hello ptiyanka welcome to cybrom</h1> */}
    {/* <button onClick={()=>{diplay}}></button> */}
    {/* <button onClick={display}>click here</button> */}
    {/* <button onClick={(e)=>{myCybrom("jlu,e")}}click here></button> */}
   {/* <button name="mybtn1" value="bplbutton"onClick={display}>click here</button> */}

   Enter name : <input type="text" name="stunm" value="priyanka" onChange={getVal}/>
   <br />
   Enter city : <input type="text" />
   <br />

      
    </>
  )

}
export default App
