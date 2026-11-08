import { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

function FormPage({ form, onBack }) {
  const signatures = useRef({})
  function submitForm(e) {
    e.preventDefault()
    alert(form.fields.filter(field => field.type !== 'label').map(field => `${field.label}: ${field.type === 'boolean' ? document.getElementById(field.key).checked : field.type === 'signature' ? !signatures.current[field.key].isEmpty() : document.getElementById(field.key).value}`).join('\n'))
    e.target.reset()
    Object.values(signatures.current).forEach(signature => signature.clear())
  }
  // These display fields go through an if then else chain to display the correct input type based on the input form payload. 
  // Eventually, I might be able to turn every single form type into a reusable component, if they start to have more individual functionality.
  const displayFields = form.fields.map(field =>
    field.type === 'label'
      ? <p key={field.key} className="form-text">{field.label}</p>
      : <div key={field.key}>
          <label htmlFor={field.key}>{field.label}</label>
          {field.type === 'select'
      ? <select id={field.key}>
          {field.options.map(option =>
            <option key={option.trim()}>{option.trim()}</option>
          )}
        </select>
      : field.type === 'date'
      ? <input type="date" id={field.key} />
      : field.type === 'textarea'
      ? <textarea id={field.key} />
      : field.type === 'boolean'
      ? <input type="checkbox" id={field.key} />
      : field.type === 'phone'
      ? <input type="tel" id={field.key} />
      : field.type === 'signature'
      ? <>
          <SignatureCanvas
            ref={el => { signatures.current[field.key] = el }}
            canvasProps={{ id: field.key, className: 'signature-box' }} />
          <button type="button" onClick={() => signatures.current[field.key].clear()}>Clear</button>
        </>
      : <input type="text" id={field.key} />}
        </div>
  )
  return (
    <section className="panel form-page">
      <button type="button" className="link-button" onClick={onBack}>
        Back | All forms
      </button>
      <h1>{form.title}</h1>
      <p>{form.description}</p>
      <form onSubmit={submitForm}>
        {displayFields}
        <br></br>
        <button type="submit" className="primary">Submit</button>
      </form>
    </section>
  )
}

export default FormPage