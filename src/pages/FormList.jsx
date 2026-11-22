import { Link } from 'react-router'

// main list and admin list should be the same, just different pages and heading/prompt
function FormList({ forms, loading, heading, prompt, basePath }) {
  return (
    <section className="panel">
      <h1>{heading}</h1>
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
