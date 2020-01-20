import React from 'react';

// Styling Components
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

// Custom Components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage;
