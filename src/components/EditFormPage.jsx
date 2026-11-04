function EditFormPage({ form, onSave, onBack }) {
  function removeItem(key) {
    onSave({ ...form, fields: form.fields.filter(f => f.id !== key) })
  }
  function editItem(key, newLabel) {
    onSave({ ...form, fields: form.fields.map(f => f.id === key ? { ...f, label: newLabel } : f) })
  }
  function editOptions(key, options) {
    onSave({ ...form, fields: form.fields.map(f => f.id === key ? { ...f, options: options } : f) })
  }
  function renderItems(field, key) {
    return (
      <div key={key}>
        <input type="text" value={field.label} onChange={(e) => editItem(key, e.target.value)} />
        {field.type === 'select' &&
          <input type="text" value={field.options} onChange={(e) => editOptions(key, e.target.value)} />}
        <button type="button" onClick={() => removeItem(key)}>Remove</button>
      </div>
    )
  }
  const displayFields = form.fields.map(field => renderItems(field, field.id))
  return (
    <section className="panel form-page">
      <button type="button" className="link-button" onClick={onBack}>
        Back | All forms
      </button>
      <h1>{form.title}</h1>
      <p>{form.description}</p>
      {displayFields}
      <br></br>
      <button>Submit</button>
    </section>
  )
}

  export default EditFormPage