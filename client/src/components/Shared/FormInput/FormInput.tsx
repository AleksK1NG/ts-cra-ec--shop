import React from 'react'

import { FormInputLabel, FormInputContainer, GroupContainer } from './FormInput.styles'

interface IProps {
  handleChange: (e: any) => void
  otherProps?: any
  label: string
  name: string
  value: string
  type?: string
  required?: boolean
  as?: any
}

const FormInput: React.FC<IProps & React.HTMLProps<HTMLInputElement>> = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  )
}

export default FormInput
