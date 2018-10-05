import React from 'react';
// import PropTypes from 'prop-types';
import userpic from './user-superstar-2x.jpg'
import styles from './styles.module.scss';

const UserInfo = () => (
  <div className={styles.user_info_block}>
    <img src={userpic} alt="Name foto" className={styles.userpic} />
    <div className={styles.user_info}>
      <h4 className={styles.name}>Name</h4>
      <p className={styles.email}>e-mail</p>
    </div>
  </div>
);

export default UserInfo;