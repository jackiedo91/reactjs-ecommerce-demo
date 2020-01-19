import React from 'react';

// Styling Components
import { HomePageContainer } from './homepage.styles'

// Custom Components
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
)


export default HomePage;