import { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

function FormPage({ form, onBack }) {
  const signatures = useRef({})
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
      {displayFields}
      <br></br>
      <button className="primary">Submit</button>
    </section>
  )
}

export default FormPage