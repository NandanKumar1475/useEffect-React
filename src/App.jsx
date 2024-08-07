import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // function onclickhandler() {
  //   setCount(count+1)
  // }

  return (
    <div>
      {/* <button onClick={onclickhandler}>counter {count}</button> */}

      <CustomButtom count = {count} setCount= {setCount}></CustomButtom>
    </div>
  )
  function CustomButtom(props){
    function onclickhandler(){
      props.setCount(count+1);
    }
    return <button onClick={onclickhandler}>
      counter {props.count}

    </button>

  }
}

export default App
