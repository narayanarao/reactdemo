import React from 'react';
import classes from './NewAccount.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from '../../axios';
import {useEffect,useState} from "react";
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const handleChange = (event) => {
     console.log(event.target.value); 
   }
    const saveCourse = () =>{
      alert("save");
    }
    
 const  NewAccount  = (props) =>  {
 const [submitted, setSubmitted] = useState(false);
 const [isLoading, setIsLoading] = useState(true);
 const [course,setCourse] = useState([])
 const [authentication,setAuthentication] = useState({
   role:"student"
 })
 const [studentCourses,setStudentCourses] = useState({})
 const [registerAccount,setRegisterAccount] = useState( {
   name:"",
   email:"",
   contact:"",
 });
 const [hasError, setHasError] = useState(false);
 const [state, setState] = useState([]);

 const createAccount = (e) => {
   const createAccountData = {
    ...registerAccount,
        authentication,
        studentCourses
   } 
   console.log(createAccountData);
   e.preventDefault();
   const headers = { 
    "Content-type": "application/json"
    };
   axios.post('/createaccount',createAccountData,headers)
   .then((result) => {
     //access the results here....
    // setState(result.data);
     console.log(result.data.message);
     setState(result.data.message);
     
   }).catch(error =>{
       setHasError(true);
       setSubmitted(false);
   });   
   //const result = SaveAccount(registerAccount)
   setSubmitted(true);
   
}

const onChange = (field,value) =>{
    setRegisterAccount({
      ...registerAccount,
      [field]: value,
    })
}

  useEffect(() => {
    axios.get('/allcourses')
    .then(response => {
          console.log(response);
          setCourse(response.data);
          setIsLoading(false);
      })
      .catch(error =>{
        console.log(error);
      } );
   
  }, []); 
        
        const styles = useStyles();
         return(
             
             <div className={classes.registerform}>
                {hasError ? <div className={classes.error}>Error occured.</div>:""}
                <div className={classes.error}>{state}</div>
                <form className={styles.root} noValidate autoComplete="off" onSubmit={createAccount}>
                    <TextField  
                        label="Name"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small" 
                        name="name"
                        onChange={event => onChange("name",event.target.value)}
                        />
                        <TextField  label="Password"
                        id="outlined-size-small"
                        variant="outlined"
                        type="password"
                        size="small"
                        name="password"
                        onChange={event => setAuthentication({...authentication,"password":event.target.value})}/>
                        <TextField  
                        label="Email"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small" 
                        name="email"
                        onChange={event => {
                          onChange("email",event.target.value)
                          setAuthentication({...authentication,"email":event.target.value})
                        }}
                        />
                        <TextField  
                        label="Contact"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small" 
                        name="contact"
                        onChange={event => onChange("contact",event.target.value)}
                        />
                        {isLoading && <p>Wait Courses are loading</p>}
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">Course</InputLabel>
                          <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="courseId"
                            onChange={event => setStudentCourses({"courseId":event.target.value})}
                            >
                            {course.map(c =>
                              <MenuItem  key={c.courseId} value={c.courseId}>{c.courseName}</MenuItem>
                            )}
                          </Select>
                        </FormControl> 
                        <Button variant="contained" color="primary" type="submit" disabled={submitted}>Register</Button>
                </form>
             </div>
         )

         
     }
 export default NewAccount;