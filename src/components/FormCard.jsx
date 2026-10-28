function FormCard({ form, onSelect }) {
  return (
    <button type="button" className="form-card" onClick={() => onSelect(form)}>
      <span className="form-card-title">{form.title}</span>
      <span className="form-card-description">{form.description}</span>
    </button>
  )
}

export default FormCard