import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import useStyles from './styles/NavbarStyles';

const word = {
  english: { search: 'Search...'},
  french: { search: 'Chercher...'},
  spanish: { search: 'Buscar...'},
}
function  Navbar() {
  const classes = useStyles();
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {search} = word[language];

  const onClick = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  return (
    <div className={classes.root}>
    <AppBar position='static' color={isDarkMode ? 'default': 'primary'}>
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
        <Switch onClick={onClick}/>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase placeholder={search} classes={{
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