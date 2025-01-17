import { useState } from 'react'

const App = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    // ...spread operator
    console.log(input);

    const handleSubmit = function(){
      console.log(input)
    }
  }
  return (
    <>
      <h1>hello priynka welcome to the React js Class using UseState & handleInput😍</h1>
      Enter name: <input type='text' name='stuname' onChange={handleInput} />
      <br /><br />

      Enter city: <input type='text' name='city' onChange={handleInput} />
      <br /> <br />
      Enter subject:< input type='text' name='subject' onChange={handleInput} />
      <br /><br />
      Enter fees: < input type='text' name='fee' onChange={handleInput} />
      <br /><br />
      <button onClick={handleInput}>click</button>
    </>

  )
}

export default App;
