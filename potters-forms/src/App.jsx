import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import FormList from './pages/FormList.jsx'
import FormPage from './pages/FormPage.jsx'
import EditFormPage from './pages/EditFormPage.jsx'
import Content from './components/Content.jsx'
import './App.css'

function App() {
  const [formList, setFormList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadForms() {
      try {
        const response = await fetch('/api/forms')
        if (!response.ok) throw new Error('Unable to load forms')
        setFormList(await response.json())
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadForms()
  }, [])

  // returns true on success so the edit page knows whether its changes were saved
  async function updateForm(form) {
    try {
      const response = await fetch(`/api/forms/${form.formId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!response.ok) throw new Error('Could not save form')
      const updated = await response.json()
      setFormList(prev => prev.map(f => (f.formId === updated.formId ? updated : f)))
      setError('')
      return true
    } catch (err) {
      setError(err.message)
      return false
    }
  }

  return (
    <Content>
      {error && <p role="alert" className="panel">{error}</p>}
      <Routes>
        <Route path="/" element={<Navigate to="/forms" replace />} />
        <Route path="/forms" element={<FormList forms={formList} loading={loading} heading="Forms" prompt="Choose a form:" basePath="/forms" />} />
        <Route path="/forms/:formId" element={<FormPage forms={formList} loading={loading} />} />
        <Route path="/admin" element={<FormList forms={formList} loading={loading} heading="Admin View" prompt="Choose a form to edit:" basePath="/admin" />} />
        <Route path="/admin/:formId" element={<EditFormPage forms={formList} loading={loading} onSave={updateForm} />} />
        <Route path="*" element={<section className="panel"><h2>404 - Page Not Found</h2></section>} />
      </Routes>
    </Content>
  )
}

export default App
