import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import Backdrop from '../Backdrop';
import SideDrawer from '../SideDrawer';
import styles from './styles.module.scss';

console.log(styles);

const INITIAL_STATE = {
  siteDrawerOpen: false,
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  drawerToogleClickButton = () => {
    this.setState(prevState => ({ siteDrawerOpen: !prevState.siteDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ siteDrawerOpen: false });
  };

  render() {
    const { siteDrawerOpen } = this.state;
    return (
      <div className={styles.app}>
        {/* <div className={styles.content_container}> */}
          <Toolbar drawerClickHandler={this.drawerToogleClickButton} />
          <SideDrawer show={siteDrawerOpen} />
          {siteDrawerOpen && <Backdrop click={this.backdropClickHandler} />}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
