import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState('hello')

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <p>You typed: {text}</p>
      <button onClick={() => setText('Hello')}>Reset value to hello</button>
    </>
  )
}

export default App
