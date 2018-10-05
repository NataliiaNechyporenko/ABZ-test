import React from 'react';
// import PropTypes from 'prop-types';
import { ReactComponent as LogoIcon } from './logo.svg';
import styles from './styles.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <a href="/"><LogoIcon width='134' height='24' /></a>
  </div>
);

export default Logo;