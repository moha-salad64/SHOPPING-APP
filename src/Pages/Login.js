import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'
import {toast} from 'react-toastify';
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom';



const  Login = () => {

  //create fields state
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();


  //create loading state
  const [loading , setLoading] = useState(false);

  //create function handling
  const handleSubmit = async (event) =>{
    event.preventDefault();
    
    if(!email && !password)
      // toast.error('Input fields are empty!')
      return;

      //start loading
      setLoading(true);
      try{
        await signInWithEmailAndPassword(auth , email , password);
        toast.success("login has been successfully")
        // console.log('login successfully');
        navigate('/');
      }catch(error){
        toast.error("Invalid email || password");
        // console.log("invalid email || password");
      }
      finally{
        setEmail("")
        setPassword("");
        setLoading(false);
      }
  }

  return (
    <div className='signIn-container'>
        <h1>Login</h1>
        <form className='frm-container'  onSubmit={handleSubmit}>
          <div className='input-sign'>
            <label>Email</label>
            <input type='text' placeholder='username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='input-sign'>
            <label>Password</label>
            <input type='password' placeholder='password'
            value={password}
            onChange={(e) =>setPassword(e.target.value)}/>
          </div>
          <div className='btn-sign'>
            <button type='submit' className='btn'>
              <span>
                {loading ? <Loader/> : "Login"}
              </span>
            </button>
          </div>
        </form>
    </div>
  )
}

export default Login