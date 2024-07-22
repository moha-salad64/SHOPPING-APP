import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'


const UserAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);
    //useEffect of user authontication
    useEffect(() => {
        const unsubscribeUser = onAuthStateChanged(auth, user => {
            if (user)
                setCurrentUser(user);
            else
                setCurrentUser(null);
        });

        return () => unsubscribeUser;
    }, []);

    return currentUser;
}

export default UserAuth;