import React from 'react'
import './SignInAndSignUpPage.styles.scss'
import SignIn from '../../components/SingIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const SignInAndSignUpPage: React.FC = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage
