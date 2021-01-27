import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from '../NavigationItems/NavigationItems.css'

const navigationItems = (props) => {
  return  (
    <ul className={classes.NavigationItems}>
     <NavigationItem link="/">Burger Builder</NavigationItem>
     <NavigationItem link="/orders">Orders</NavigationItem>
     { !props.isAuthenticated ? 
    <NavigationItem link="/auth">Authenticate</NavigationItem>
    : 
    <NavigationItem link="/logout">logout</NavigationItem>

    } 
    </ul>
)};

export default navigationItems;