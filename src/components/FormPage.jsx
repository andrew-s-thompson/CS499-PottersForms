import { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

function FormPage({ form, onBack }) {
  const signatures = useRef({})
  const displayFields = form.fields.map(field =>
    <div key={field.id}>
      <label htmlFor={field.id}>{field.label}</label>
      {field.type === 'select'
        ? <select id={field.id}>
            {field.options.split(',').map(option =>
              <option key={option.trim()}>{option.trim()}</option>
            )}
          </select>
        : field.type === 'date'
          ? <input type="date" id={field.id} />
          : field.type === 'textarea'
            ? <textarea id={field.id} />
            : field.type === 'signature'
              ? <>
                  <SignatureCanvas
                    ref={el => { signatures.current[field.id] = el }}
                    canvasProps={{ id: field.id, className: 'signature-box' }} />
                  <button type="button" onClick={() => signatures.current[field.id].clear()}>Clear</button>
                </>
              : <input type="text" id={field.id} />}
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