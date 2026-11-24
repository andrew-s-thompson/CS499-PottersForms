import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router'

function EditFormPage({ forms, loading, onSave, onDelete }) {
  const { formId } = useParams()
  const navigate = useNavigate()
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
  // the options box is comma separated options, and I found this reference to help explain how to go about that: https://bobbyhadz.com/blog/javascript-split-remove-empty-elements
  // trim each option first https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  function cleanOptions(options) {
    return options.map(option => option.trim()).filter(option => option)
  }
  async function submitForm() {
    const cleanedFields = form.fields.map(f => ({ ...f, options: cleanOptions(f.options) }))
    if (await onSave({ ...form, fields: cleanedFields })) {
      setDraft(null)
      setMessage('Changes saved.')
    }
  }
  async function deleteForm() {
    if (!window.confirm(`Delete "${form.title}"? This cannot be undone.`)) return
    if (await onDelete(form.formId)) navigate('/admin')
  }
  function addField(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const key = data.get('key')
    if (form.fields.some(f => f.key === key)) {
      setMessage('A field with that key already exists.')
      return
    }
    changeFields([...form.fields, { key: key, label: data.get('label'), type: data.get('type'), required: false, options: [], exclude: false }])
    e.target.reset()
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
      <form className="edit-row" onSubmit={addField}>
        <input name="key" placeholder="field_key" pattern="[a-z0-9_]+" title="Lowercase letters, numbers and underscores" required />
        <input name="label" placeholder="Label" required />
        <select name="type">
          {['text', 'longtext', 'date', 'number', 'phone', 'email', 'select', 'boolean', 'signature', 'label'].map(type =>
            <option key={type}>{type}</option>
          )}
        </select>
        <button type="submit">Add field</button>
      </form>
      <br></br>
      <button className="primary" onClick={submitForm} disabled={!draft}>Submit</button>
      <button type="button" onClick={deleteForm}>Delete form</button>
      {message && <p>{message}</p>}
    </section>
  )
}

export default EditFormPage
