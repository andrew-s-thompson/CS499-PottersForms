import { useState } from 'react'
import Header from './components/Header.jsx'
import FormCard from './components/FormCard.jsx'
import Content from './components/Content.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Content>
      <h1>Forms</h1>
      <p>Choose a form:</p>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </Content>
    </>
  )
}

export default App
