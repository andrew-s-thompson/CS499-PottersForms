import { useState } from 'react'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Content>
      <h1>Forms</h1>
    </Content>
    </>
  )
}

export default App
