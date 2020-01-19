import React from 'react';

// Styling Component
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...otherProps}) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton;
