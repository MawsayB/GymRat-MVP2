import React, { Component } from 'react';
import '../App.css';
import logo from '../images/gymRat_logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NavBar from "./NavBar.js"

class HeaderMenu extends Component {
  render() {
    return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
            <TypoGraphy variant="title"
            color="inherit">
            GymRat
            </TypoGraphy>
            <NavBar />
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default HeaderMenu;
