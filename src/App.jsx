import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import FormList from './pages/FormList.jsx'
import FormPage from './pages/FormPage.jsx'
import EditFormPage from './pages/EditFormPage.jsx'
import Content from './components/Content.jsx'
import { payload } from './data/forms.js'
import './App.css'

function App() {
  const [formList, setFormList] = useState(payload.forms)

  function updateForm(updated) {
    setFormList(prev => prev.map(f => (f.formId === updated.formId ? updated : f)))
  }

  return (
    <Content>
      <Routes>
        <Route path="/" element={<Navigate to="/forms" replace />} />
        <Route path="/forms" element={<FormList forms={formList} heading="Forms" prompt="Choose a form:" basePath="/forms" />} />
        <Route path="/forms/:formId" element={<FormPage forms={formList} />} />
        <Route path="/admin" element={<FormList forms={formList} heading="Admin View" prompt="Choose a form to edit:" basePath="/admin" />} />
        <Route path="/admin/:formId" element={<EditFormPage forms={formList} onSave={updateForm} />} />
        <Route path="*" element={<section className="panel"><h2>404 - Page Not Found</h2></section>} />
      </Routes>
    </Content>
  )
}

export default App
