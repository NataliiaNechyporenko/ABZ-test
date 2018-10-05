import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LineMenu } from './line-menu.svg';

// import styles from './styles.module.scss';

const DrawerToogleButton = ({click}) => (
  <button type="button" onClick={click} >
    <LineMenu />
  </button>
);


DrawerToogleButton.defaultProps = {
  click: () => {},
}

DrawerToogleButton.propTypes = {
  click: PropTypes.func,
}; 

export default DrawerToogleButton;