import React from 'react'

import './SignIn.styles.scss'
import FormInput from '../Shared/FormInput/FormInput'
import CustomButton from '../Shared/CustomButton/CustomButton'

import { useForm } from '../../hooks/useForm'

interface IForm {
  email: string
  password: string
}

const initialState: IForm = {
  email: '',
  password: ''
}

const SignIn: React.FC = () => {
  const [values, handleChange] = useForm(initialState)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()

    console.log('Form Submit values => ', values)
    // setValues({email: '', password: ''})
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" handleChange={handleChange} value={values.email} label="email" required />
        <FormInput
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  )
}

export default SignIn
