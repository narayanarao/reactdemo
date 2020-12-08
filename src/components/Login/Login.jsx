import React, { useState } from 'react';
import classes from '../Login/Login.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import axios from '../../axios'; 
import {setUserSession} from '../../utils/Common';
import {useDispatch} from 'react-redux';
import {islogged} from '../../actions/actions';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
 
 
 

const Login = (props) => {
    console.log("line 27");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [login,setLogin] = useState ({
      email:"",
      password:""
    })
    const onChange = (field,value) => {
      setLogin ({
        ...login,
        [field]: value,
      })
    }
    const validateUser = (e) => {
     
      setError(null);
      setLoading(true);
      console.log(login);
      const headers = { 
        "Content-type": "application/json"
        };
       axios.post('/login',login,headers).then(response => {
        setLoading(false);
        setUserSession("DAD2255","raja");
        if(response.data.message === "student"){
          props.history.push('/student');
          dispatch(islogged(true));
        }else{
          props.history.push('/admin');
        }
        console.log(response.data.message);
      }).catch(error => {
        setLoading(false);
        setError("Something went wrong. Please try again later.");
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });


      e.preventDefault();
    }

    const styles = useStyles();
    return (
     
      <div className={classes.loginbox}>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <form className={styles.root} noValidate autoComplete="off" onSubmit={validateUser} method="post"> 
           <TextField  
              label="Email"
              id="outlined-size-small"
              variant="outlined"
              size="small" 
              name="email"
              onChange={e => onChange("email",e.target.value)}/>
            <TextField  label="Password"
              id="outlined-size-small"
              variant="outlined"
              size="small" 
              name="password"
              type="password"
              onChange={e => onChange("password",e.target.value)}/>
            <Button variant="contained" color="primary" type="submit" disabled= {loading}>{loading ? 'Loading...' : 'Login'}</Button>
            <NavLink to="/newaccount">New Account</NavLink>
         </form>
        </div>
        
    )
}
export default Login;