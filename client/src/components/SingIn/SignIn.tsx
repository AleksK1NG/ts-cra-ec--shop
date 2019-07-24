import React from 'react'
import { connect } from 'react-redux'

import './SignIn.styles.scss'
import FormInput from '../Shared/FormInput/FormInput'
import CustomButton from '../Shared/CustomButton/CustomButton'

import { useForm } from '../../hooks/useForm'
import { loginRequest } from '../../store/modules/auth/authActions'

export interface ILoginForm {
  email: string
  password: string
}

const initialState: ILoginForm = {
  email: '',
  password: ''
}
interface IProps {
  loginRequest: (userData: ILoginForm) => void
}

const SignIn: React.FC<IProps> = ({ loginRequest }) => {
  const [values, handleChange, setValues] = useForm(initialState)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!values.email || !values.password) return

    console.log('Form Submit values => ', values)
    loginRequest(values)
    setValues({ email: '', password: '' })
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

export default connect(
  null,
  { loginRequest }
)(SignIn)
