import React, { useState,useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar,Avatar,Typography,Toolbar,Button } from '@material-ui/core';
// import  Search  from './Search.js';
import useStyles from './styles.js';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location  =   useLocation();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');        
        setUser(null);
    }

    useEffect(
        ()=>{
            // const token = user?.token;
            //JWT
            setUser(JSON.parse(localStorage.getItem('profile')));          
        },
        [location]
    );

    return(
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h6">Authentication</Typography>
        </div>
        {/* <Search />         */}
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h7">{user.result.name}</Typography>
                    <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>Logout</Button>
                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>

            )}
        </Toolbar>

    </AppBar>
    );
}

export default Navbar;