import { useState } from 'react'
import Header from './components/Header.jsx'
import FormCard from './components/FormCard.jsx'
import FormPage from './components/FormPage.jsx'
import Content from './components/Content.jsx'
import { forms } from './data/forms.js'
import './App.css'

function App() {
  const [selectedForm, setSelectedForm] = useState(null)
  const [page, setPage] = useState('forms')

  if (page === 'admin') {
    return (
      <Content page={page} onAdminClick={() => {
        setPage('forms') 
        setSelectedForm(null)}}>
        <section className="panel">
          <h1>Admin View</h1>
          <p>Choose a form to edit:</p>
          {forms.map((form) => (
            <FormCard key={form.id} form={form} onSelect={setSelectedForm} />
          ))}
        </section>
      </Content>
    )
  }

  if (selectedForm) {
    return (
      <>
      <Content page={page} onAdminClick={() => {
        setPage('admin') 
        setSelectedForm(null)}}>
        <FormPage form={selectedForm} onBack={() => setSelectedForm(null)} />
      </Content>
      </>

    )
  }

  return (
    <>
    <Content page={page} onAdminClick={() => {
        setPage('admin') 
        setSelectedForm(null)}}>
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