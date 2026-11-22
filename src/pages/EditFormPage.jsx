import { useParams, Link } from 'react-router'

function EditFormPage({ forms, onSave }) {
  const { formId } = useParams()
  const form = forms.find(f => f.formId === formId)
  if (!form) {
    return (
      <section className="panel">
        <h2>Form Not Found</h2>
        <Link to="/admin" className="back-link">Back | All forms</Link>
      </section>
    )
  }
  function removeItem(key) {
    onSave({ ...form, fields: form.fields.filter(f => f.key !== key) })
  }
  function editItem(key, newLabel) {
    onSave({ ...form, fields: form.fields.map(f => f.key === key ? { ...f, label: newLabel } : f) })
  }
  function editOptions(key, options) {
    onSave({ ...form, fields: form.fields.map(f => f.key === key ? { ...f, options: options } : f) })
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
      <Link to="/admin" className="back-link">Back | All forms</Link>
      <h1>{form.title}</h1>
      <p>{form.description}</p>
      {displayFields}
      <br></br>
      <button className="primary">Submit</button>
    </section>
  )
}

  export default EditFormPage