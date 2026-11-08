function FormPage({ form, onBack }) {
  const displayFields = form.fields.map(field =>
    <div key={field.id}>
      <label>{field.label}</label>
      {field.type === 'select'
        ? <select>
            {field.options.split(',').map(option =>
              <option key={option.trim()}>{option.trim()}</option>
            )}
          </select>
        : <input type="text" />}
    </div>
  )
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

export default FormPage