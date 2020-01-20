import React from 'react';

// ThirdParty
import { auth, signInWithGoogle } from '../../firebase/firebase.utls';

// Styling component
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

// Custom Component
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux actions

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}  >
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='email'
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='password'
            />

          <ButtonsBarContainer>
            <CustomButton type='Submit'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google
              {' '}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}



export default SignIn;
