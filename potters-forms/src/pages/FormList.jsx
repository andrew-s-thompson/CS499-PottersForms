import { Link, useNavigate } from 'react-router'

// main list and admin list should be the same, just different pages and heading/prompt
function FormList({ forms, loading, heading, prompt, basePath, onCreate }) {
  const navigate = useNavigate()
  async function createForm(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const formId = data.get('formId')
    const form = { formId: formId, version: 1, title: data.get('title'), description: '', anonymous: false, participantKeys: [], fields: [] }
    if (await onCreate(form)) navigate(`${basePath}/${formId}`)
  }
  return (
    <section className="panel">
      <h1>{heading}</h1>
      {onCreate &&
        <form className="edit-row" onSubmit={createForm}>
          <input name="formId" placeholder="form-id" pattern="[a-z0-9-]+" title="Lowercase letters, numbers and dashes" required />
          <input name="title" placeholder="Title" required />
          <button type="submit" className="primary">New form</button>
        </form>}
      <p>{loading ? 'Loading forms...' : prompt}</p>
      {forms.map(form =>
        <Link key={form.formId} to={`${basePath}/${form.formId}`} className="form-card">
          <span className="form-card-title">{form.title}</span>
          <span className="form-card-description">{form.description}</span>
        </Link>
      )}
    </section>
  )
}

export default FormList
