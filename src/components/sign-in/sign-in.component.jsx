import React from 'react';
// ThirdParty
import { signInWithGoogle } from '../../firebase/firebase.utls';

// Styling
import './sign-in.styles.scss';
// Custom Component
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

    }
  }

  handleSubmit = event => {
    event.preventDefaut();

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
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

          <div className="buttons">
            <CustomButton type='Submit'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google
              {' '}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}


export default SignIn;
