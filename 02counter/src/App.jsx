import { useState } from 'react'         // for using hooks 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)   // way to use hooks
  // if not using hooks , the value will be changed but not in the UI  
  // hooks simply updates all the variables at one time in the UI
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    if(counter >= 20){
      console.log("oops! can't go above 20")
    }else {
      setCounter(counter + 1)
    }
    
  }

  const removeValue = () => {
    if(counter <= 0){
      console.log("oops! can't go below 0")
    }else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
