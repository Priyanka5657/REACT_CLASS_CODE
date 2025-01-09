import React from 'react'
import Cybrom from './Cybrom'
// const myhead={
//   color:'red',
//   fonSize:'40px',
//   textDecoration:'overline',
//   fontFamily:'vardana',
//   textalign:'center',
//   paddingtop:'50px',
// }
const App = () => {
  return (
    <>
    {/* <h1 style={{color:'red', fontFamily:'arial', textDecoration:'underline'}}>hello</h1>
    <h2 style={{color:'blue', fontFamily:'sans-serif', textDecoration:'overline'}}>we are developer</h2>
    <h3 style={{color:'green',  backgroundColor:'yellow',fontFamily:'cursive', padding:'30px'}}>hello world</h3> */}

    {/* <h1 style={myhead}>welcome to cybrom</h1> */}

    <h1 className='head1'>we are developer
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam nam optio accusantium in quae quasi ducimus ipsa, fugiat delectus dolorum sit commodi exercitationem dignissimos voluptatibus eum eligendi. Repellendus, eos.</p>
    </h1>
    <Cybrom/>

      
    </>
  )
}

export default App
