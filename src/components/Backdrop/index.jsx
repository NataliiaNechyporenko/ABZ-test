import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Backdrop = ({click}) => (
  <div className={styles.backdrop} onClick={click} onKeyPress={click} role="presentation" />
);

Backdrop.defaultProps = {
  click: () => {},
}

Backdrop.propTypes = {
  click: PropTypes.func,
}; 

export default Backdrop;