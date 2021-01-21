import React from 'react';

import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';

import Aux from '../../hoc/Auxillity';
import classes from './Layout.css';

const layout = (props) => (
  <Aux>
    <SideDrawer/>
    <Toolbar/>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
