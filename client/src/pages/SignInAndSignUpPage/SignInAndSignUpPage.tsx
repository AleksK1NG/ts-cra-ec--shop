import React from 'react'
import SignIn from '../../components/SingIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import { SignInAndSignUpContainer } from './SignInAndSignUpPage.styles'

const SignInAndSignUpPage: React.FC = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInAndSignUpPage
