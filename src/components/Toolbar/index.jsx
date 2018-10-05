import React from 'react';
import PropTypes from 'prop-types';
import DrawerToogleButton from '../SideDrawer/DrawerToogleButton';
import Logo from '../Logo';
import UserInfo from '../UserInfo';
import styles from './styles.module.scss';

const Toolbar = ({drawerClickHandler}) => (
  <header className={styles.toolbar}>
    <nav className={styles.navigation}>
      <Logo />
      <div className={styles.toogle_button}>
        <DrawerToogleButton click={drawerClickHandler} />
      </div>
      <div className={styles.navigation_items}>
        <ul>
          <li><a href="/">About me</a></li>
          <li><a href="/">Relationships</a></li>
          <li><a href="/">Recuirements</a></li>
          <li><a href="/">Users</a></li>
          <li><a href="/">Sing Up</a></li>
          <li><a href="/">Sing Out</a></li>
        </ul>
      </div>
      <div className={styles.user_info_block} >
        <UserInfo />
      </div>
    </nav>
  </header>
);

Toolbar.defaultProps = {
  drawerClickHandler: () => {},
}

Toolbar.propTypes = {
  drawerClickHandler: PropTypes.func,
}; 

export default Toolbar;
