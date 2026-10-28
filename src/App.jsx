import { useState } from 'react'
import Header from './components/Header.jsx'
import FormCard from './components/FormCard.jsx'
import FormPage from './components/FormPage.jsx'
import Content from './components/Content.jsx'
import { forms } from './data/forms.js'
import './App.css'

function App() {
  const [selectedForm, setSelectedForm] = useState(null)

  if (selectedForm) {
    return (
      <>
      <Content>
        <FormPage form={selectedForm} onBack={() => setSelectedForm(null)} />
      </Content>
      </>

    )
  }

  return (
    <>
    <Content>
      <section className="panel">
      <h1>Forms</h1>
      <p>Choose a form:</p>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} onSelect={setSelectedForm} />
      ))}
      </section>
    </Content>
    </>
  )
}

export default App