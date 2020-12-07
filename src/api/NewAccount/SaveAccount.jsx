import axios from 'axios';
import { useState } from 'react';


const SaveAccount = (userData) => {
  const [errorMessage,setErrorMessage] = useState({
    message:""
  })
  alert("SaveAccount");
  console.log(userData);
  axios.post('/createaccount',userData)
  .then((result) => {
    //access the results here....
    console.log(result);
    
  }).catch(error =>{
    console.log(error);
    setErrorMessage({message:error.message})
    console.log(errorMessage);
  });   
  return "result";
}
export default SaveAccount;