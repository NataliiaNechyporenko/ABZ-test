import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../UserInfo';
import styles from './styles.module.scss';

const SideDrawer = ({show}) => {
  let drawerClasses = [styles.side_drawer];
  if (show) {
    drawerClasses = [styles.side_drawer, styles.open].join(' ');
  }
  return (
  <nav className={drawerClasses}>
    <UserInfo />
    <ul>
      <li><a href="/">About me</a></li>
      <li><a href="/">Relationships</a></li>
      <li><a href="/">Recuirements</a></li>
      <li><a href="/">Users</a></li>
      <li><a href="/">Sing Up</a></li>
      <li><a href="/">Sing Out</a></li>
    </ul>
  </nav>
);
}

SideDrawer.defaultProps = {
  show: false,
}

SideDrawer.propTypes = {
  show: PropTypes.bool,
}; 

export default SideDrawer;