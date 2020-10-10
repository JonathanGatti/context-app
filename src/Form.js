import React, { useContext } from 'react';
import {LanguageContext} from './contexts/LanguageContext'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import useStyles from './styles/FormStyles';

const words = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame"
  }
};

function Form() {
  const classes = useStyles();
  const {language, setLanguage} = useContext(LanguageContext);
  const {signIn, email, password, remember} = words[language];

  const onChange = (e) => {
    setLanguage(e.target.value)
  }
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>Sign in</Typography>
        <Select value={language} onChange={onChange}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus></Input>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus></Input>
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary' />} label={remember}/>
          <Button 
            variant='contain' 
            type='submit' 
            fullWidth 
            color='primary' 
            className={classes.submit}
            >
            {signIn}
            </Button>
        </form>
      </Paper>
    </main>
  )
}

export default Form;