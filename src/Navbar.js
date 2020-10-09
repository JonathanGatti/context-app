import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles/NavbarStyles';

function  Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position='static' color='primary'>
      <Toolbar>
        <IconButton className={classes.menuButton} color='inherit'>
          <span>🇫🇷</span>
        </IconButton>
        <Typography
          className={classes.title}
          variant='h6'
          color='inherit'
        >
          App Title
        </Typography>
        <Switch />
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase placeholder='Search...' classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }} />
        </div>
      </Toolbar>
    </AppBar>
  </div>

  )     
}

export default Navbar;