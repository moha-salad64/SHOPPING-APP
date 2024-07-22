import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader';


function SingUp() {

  //create form fields states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  //create Loading
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password)
      // toast.error('Input fields are empty!');
      return;

    //start Loading
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success("User creation Successfully")
      navigate("/");

    } catch (error) {
      toast.error('something want wrong!');
    } finally {
      setEmail("")
      setPassword("");
      setLoading(false);
    }

  }


  return (
    <div className='signIn-container'>
      <h1>Sign Up</h1>
      <form className='frm-container' onSubmit={handleSubmit}>
        <div className='input-sign'>
          <label>Email</label>
          <input type='text' placeholder='username'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input-sign'>
          <label>Password</label>
          <input type='password' placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='btn-sign'>
          <button type='submit' className='btn'>
            <span>
              {loading ? <Loader /> : "Sign Up"}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SingUp