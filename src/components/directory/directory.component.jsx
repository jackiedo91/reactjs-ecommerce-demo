import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Styling components
import { DirectoryMenuContainer } from './directory.styles';

// Components
import MenuItem from '../menu-item/menu-item.component';
// Redux actions
import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
