import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Avatar,Paper,Typography,Container,Grid,Button } from '@material-ui/core';
import LockOutlinedIcon    from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import { GoogleLogin } from 'react-google-login';
import { signup, signin } from '../../actions/auth';
import Input from './Input';
import useStyles from './styles.js';

const initialState = { firstName:'', lastName:'', email:'', password:'', confirmPassword:'' };

const Auth = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const [isSignUp,setIsSignUp] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [dataLogin,setDataLogin] = useState(initialState);

    const handleSubmit = (e) => {
      e.preventDefault();      
      ( isSignUp ) ? dispatch( signup( dataLogin, history ) ) : dispatch( signin( dataLogin, history ) );
    }    

    const handleChange = (e) => {
      setDataLogin( { ...dataLogin, [e.target.name]:e.target.value } );
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword);

    const switchMode = () => {
      setIsSignUp((previsSignUp) => !previsSignUp);
      setShowPassword(false);
    }

    const googleSuccess = async (respon) => {
      const result = respon?.profileObj; // ?. = option chaining   ES6
      const token = respon?.tokenId;

      try {
        dispatch({ type: 'AUTH', data : { result, token } });

        history.push('/');
      } catch (error) {
        console.log(error);
      }

    }
    
    const googleFailure = (error) => {
      console.log(error);
      console.log('Google Sign In unSuccessful')
    }

    return(
      <Container component="main"  maxWidth="xs" className={classes.paper}>
        <Paper className={classes.paper} elevation={1}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h6" color="primary">{(isSignUp ? 'SIGN UP':'SIGN IN')}</Typography>
            <form className={classes.form} onSubmit={handleSubmit} >
              <Grid container spacing={1}> 
                {
                  isSignUp && (
                      <>
                        <Input name="firstName" label="First Name" handleChange={handleChange}  half/>
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                      </>
                      )
                }
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword} />
                { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
              </Grid>
              <br/>
              <Button type="submit" variant="contained" color="primary" className="classes.submit" fullWidth >
                { isSignUp ? "Sign Up" : "Sign In"}
              </Button>
              <br/><br/>
              <GoogleLogin 
                clientId="928759542807-4do55q54jvag0nsjr2ntosjn22hitpj9.apps.googleusercontent.com"
                render={ (renderProps)=>(
                    <Button 
                        className="classes.googleButton" 
                        color="primary" 
                        fullWidth 
                        onClick={ renderProps.onClick } 
                        disabled={ renderProps.disabled } 
                        startIcon={ <Icon /> } 
                        variant="contained" 
                    >Google Sign In</Button>
                )}
                onSuccess={ googleSuccess }
                onFailure={ googleFailure }
                cookiePolicy="single_host_origin"
              />
              <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button onClick={switchMode} color="primary">
                      {isSignUp ? "Already have an Account? Sign In":"don't have an Account? Sign Up"}
                    </Button>

                  </Grid>

              </Grid>
            </form>
        </Paper>
      </Container>  
    );
}

export default Auth;