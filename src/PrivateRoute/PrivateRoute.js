import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const { user, isLogin } = useFirebase();
    const location = useLocation();
    if (isLogin) {
        return <h2>Data is Loading.....</h2>
    }
    return (
        <div>
            {
                user.email ? children : <Navigate to={'/login'} replace state={{ from: location }}></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;