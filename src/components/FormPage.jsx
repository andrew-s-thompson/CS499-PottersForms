function FormPage({ form, onBack }) {
  return (
    <section className="panel form-page">
      <button type="button" className="link-button" onClick={onBack}>
        Back | All forms
      </button>
      <h1>{form.title}</h1>
      <p>{form.description}</p>
      <input type="text" placeholder="Form Here" />
      <br></br>
      <button>Submit</button>
    </section>
  )
}

export default FormPage