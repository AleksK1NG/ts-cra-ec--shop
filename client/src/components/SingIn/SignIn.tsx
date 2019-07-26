import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../Shared/FormInput/FormInput'
import CustomButton from '../Shared/CustomButton/CustomButton'

import { useForm } from '../../hooks/useForm'
import { loginRequest } from '../../store/modules/auth/authActions'

import { SignInTitle, SignInContainer, ButtonsBarContainer } from './SignIn.styles'

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

    loginRequest(values)
    setValues({ email: '', password: '' })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
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
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default connect(
  null,
  { loginRequest }
)(SignIn)
