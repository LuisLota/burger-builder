import React from 'react';
import Aux from '../../hoc/Auxillity';
import classes from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar,SideDrawer,backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
