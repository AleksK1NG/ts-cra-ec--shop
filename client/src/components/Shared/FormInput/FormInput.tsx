import React from 'react'
import './FormInput.styles.scss'

interface IProps {
  handleChange: () => void
  otherProps: any
  label: string
}

const FormInput: React.FC<IProps> = ({ handleChange, otherProps, label }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
    </div>
  )
}

export default FormInput
