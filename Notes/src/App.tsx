import { useState } from 'react'
import NotesApp from './NotesApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NotesApp />
  )
}

export default App
