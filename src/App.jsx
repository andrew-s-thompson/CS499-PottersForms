import { useState } from 'react'
import FormCard from './components/FormCard.jsx'
import FormPage from './components/FormPage.jsx'
import EditFormPage from './components/EditFormPage.jsx'
import Content from './components/Content.jsx'
import { payload } from './data/forms.js'
import './App.css'

function App() {
  const [selectedForm, setSelectedForm] = useState(null)
  const [page, setPage] = useState('forms')
  const [formList, setFormList] = useState(payload.forms)

  function updateForm(updated) {
    setFormList(prev => prev.map(f => (f.formId === updated.formId ? updated : f)))
    setSelectedForm(updated)
  }

  function togglePage() {
    if (page === 'forms') {
      setPage('admin');
    }
    else {
      setPage('forms');
    };
    return(page);
  }

  if (page === 'admin' && !selectedForm) {
    return (
      <Content page={page} onAdminClick={() => {
        togglePage() 
        setSelectedForm(null)}}>
        <section className="panel">
          <h1>Admin View</h1>
          <p>Choose a form to edit:</p>
          {formList.map((form) => (
            <FormCard key={form.formId} form={form} onSelect={setSelectedForm} />
          ))}
        </section>
      </Content>
    )
  }

  if (selectedForm) {
    if (page === 'admin') {
      return (
        <>
        <Content page={page} onAdminClick={() => {
          setPage('forms') 
          setSelectedForm(null)}}>
          <EditFormPage form={selectedForm} onSave={updateForm} onBack={() => setSelectedForm(null)} />
        </Content>
        </>

      )
    }
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
        togglePage()
        setSelectedForm(null)}}>
      <section className="panel">
      <h1>Forms</h1>
      <p>Choose a form:</p>
      {formList.map((form) => (
        <FormCard key={form.formId} form={form} onSelect={setSelectedForm} />
      ))}
      </section>
    </Content>
    </>
  )
}


export default App