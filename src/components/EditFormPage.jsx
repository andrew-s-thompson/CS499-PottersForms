function EditFormPage({ form, onBack }) {
  function removeItem(key) {
    // somehow needs to remove the form item from the data/forms.js file using the form state and the key of the item
  }
  function editItem(key, newLabel) {
    // needs to be able to edit the label on a specific form item
  }
  function editOptions(key, options) {
    // needs to be able to edit the options listed for a select item
  }
  function renderItems(field) {
    // return needs to return a single <> </> with the form item inside (a label and a fill type, input, number, email, signature, etc.)
  }
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

  export default EditFormPage