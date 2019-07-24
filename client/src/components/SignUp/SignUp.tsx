import React from 'react'
import { connect } from 'react-redux'
import { registerRequest } from '../../store/modules/auth/authActions'
import FormInput from '../Shared/FormInput/FormInput'
import CustomButton from '../Shared/CustomButton/CustomButton'
import { useForm } from '../../hooks/useForm'

import './SignUp.styles.scss'

interface IProps {
  registerRequest: (userData: any) => void
}

export interface IRegisterForm {
  email: string
  password: string
  confirmPassword: string
  username: string
}

const initialState: IRegisterForm = { email: '', password: '', confirmPassword: '', username: '' }

const SignUp: React.FC<IProps> = ({ registerRequest }) => {
  const [values, handleChange, setValues] = useForm(initialState)
  const { email, password, username, confirmPassword } = values

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!email || !password || !username || password !== confirmPassword) return

    registerRequest(values)
    setValues(initialState)
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          value={username}
          handleChange={handleChange}
          label="User Name"
          required
        />
        <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default connect(
  null,
  { registerRequest }
)(SignUp)
