import { useState } from 'react'
import { useParams, Link } from 'react-router'

function EditFormPage({ forms, loading, onSave }) {
  const { formId } = useParams()
  // edits are kept in a local draft and only sent to the server when Submit is clicked
  const [draft, setDraft] = useState(null)
  const [message, setMessage] = useState('')
  const saved = forms.find(f => f.formId === formId)
  const form = draft ?? saved
  if (loading) {
    return <section className="panel"><p>Loading form...</p></section>
  }
  if (!form) {
    return (
      <section className="panel">
        <h2>Form Not Found</h2>
        <Link to="/admin" className="back-link">All forms</Link>
      </section>
    )
  }
  function changeFields(fields) {
    setDraft({ ...form, fields: fields })
    setMessage('')
  }
  function removeItem(key) {
    changeFields(form.fields.filter(f => f.key !== key))
  }
  function editItem(key, newLabel) {
    changeFields(form.fields.map(f => f.key === key ? { ...f, label: newLabel } : f))
  }
  function editOptions(key, options) {
    changeFields(form.fields.map(f => f.key === key ? { ...f, options: options } : f))
  }
  async function submitForm() {
    if (await onSave(form)) {
      setDraft(null)
      setMessage('Changes saved.')
    }
  }
  function renderItems(field, key) {
    return (
      <div key={key} className="edit-row">
        {field.type === 'label'
          ? <textarea value={field.label} onChange={(e) => editItem(key, e.target.value)} />
          : <input type="text" value={field.label} onChange={(e) => editItem(key, e.target.value)} />}
        {field.type === 'select' &&
          <input type="text" value={field.options.join(',')} onChange={(e) => editOptions(key, e.target.value.split(','))} />}
        <button type="button" onClick={() => removeItem(key)}>Remove</button>
      </div>
    )
  }
  const displayFields = form.fields.map(field => renderItems(field, field.key))
  return (
    <section className="panel form-page">
      <Link to="/admin" className="back-link">All forms</Link>
      <h1>{form.title}</h1>
      <p>{form.description}</p>
      {displayFields}
      <br></br>
      <button className="primary" onClick={submitForm} disabled={!draft}>Submit</button>
      {message && <p>{message}</p>}
    </section>
  )
}

export default EditFormPage
