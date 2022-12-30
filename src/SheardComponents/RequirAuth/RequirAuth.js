import { Spin } from 'antd';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const RequirAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Spin/>
    }
    if(!user){
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }
    return children;
    
};

export default RequirAuth;