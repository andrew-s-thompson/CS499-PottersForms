function FormCard({ form }) {
  return (
    <div className="form-card">
      <span className="form-card-title">{form.title}</span>
      <span className="form-card-description">{form.description}</span>
    </div>
  )
}

export default FormCard