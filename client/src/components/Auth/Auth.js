import React, { useState, useDispatch } from 'react'
import "./styles.js"
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from "./Input"
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup) {
       dispatch(signup(formData, navigate))
    } else {
       dispatch(signin(formData, navigate))
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Inscription" : "Connexion"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name='firstName' label='Prénom' handleChange={handleChange} autoFocus half />
                  <Input name='lastName' label='Nom' handleChange={handleChange} half />
                </>
              )
            }
            <Input name="email" label="E-mail" handleChange={handleChange} type="email" />
            <Input name="password" label="Mot de passe" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeter mot de passe" handleChange={handleChange} type="password" /> }
          </Grid>
              <Button 
                type="submit" 
                fullWidth 
                variant="contained" 
                color="primary" 
                className={classes.submit}
              >
              {isSignup ? "S'inscrire" : "Se connecter"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? "Vous avez déja un compte ? Se connecter" : "Vous n'avez pas de compte ? Inscrivez vous"}
                </Button>
              </Grid>
            </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth