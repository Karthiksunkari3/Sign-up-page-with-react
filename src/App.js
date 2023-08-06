import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname,setName] = useState('');
  const [successMessage,setSuccessMessage] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');
  const [error,setError] = useState([]);

function handleSubmit(e){
   e.preventDefault();
   setError([]);
   setSuccessMessage("");

   const newErrors = [];
   if(!email){
     newErrors.push("Email is required")
     
   }

   if(!fullname){
    newErrors.push('Full Name is required')
   
   }
    if(!password){
      newErrors.push('Password is required')
      
    }
    if(password!==confirmpassword){
      newErrors.push('Password does not match')
      
    }
    if(newErrors.length>0){
      setError(newErrors);
     
    
    }else{
      setError([]);
      setSuccessMessage("Account Successfully Created");
      console.log("account created");
      
    
    }
}


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
           <input type='text' value={fullname}  placeholder='Full Name' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
           <input type='email' value={email}  placeholder='Email' onChange={(e) => setEmail(e.target.value)}/> 
        </div>
        <div>
           <input type='password' value={password}  placeholder='Password' onChange={(e) => setPassword(e.target.value)}/> 
        </div>
        <div>
           <input type='password' value={confirmpassword}  placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}/>   
        </div>
        <button type='submit'>Create Account</button>
      </form>
      <div>
        {error.length>0 && error.map((err,index) => <li key={index}>{err}</li>)}
        {
          successMessage
        }
      </div>
    </div>
  );


}

export default App;