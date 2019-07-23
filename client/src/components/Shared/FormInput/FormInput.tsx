import React from 'react'
import './FormInput.styles.scss'

interface IProps {
  handleChange: (e: any) => void
  otherProps?: any
  label: string
  name: string
  value: string
  type?: string
  required?: boolean
}

const FormInput: React.FC<IProps & React.HTMLProps<HTMLInputElement>> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
    </div>
  )
}

export default FormInput
