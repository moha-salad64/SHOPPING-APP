import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Route, Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const ProtectedRoute = ({ children}) => {

  const [user ,setUser] = useState(null);
  const [loading , setLoading] = useState(true)

  useEffect(() =>{
    const unsubscribeUser = onAuthStateChanged(auth , (user) =>{
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribeUser;
  }, []);

  if(loading){
    return <div className='flex justify-center'><h3>Wait...</h3></div>;
  }
  if(!user){
    return <Navigate to='/Login'/>;
  }
    
    return (children);
};

export default ProtectedRoute;