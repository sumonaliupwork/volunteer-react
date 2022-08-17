import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { googleSignIn } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    const location_ui = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(location_ui);
            });
    }

    return (
        <div className="login">
            <Card className='mx-auto cardLogin'>
                <Card.Body className='loginCard'>
                    <Card.Title className='titleLogin'>Login with us</Card.Title>
                    <button onClick={handleGoogleSignIn} className='googleBtn'> <span className='googleIcon'><i class="fa-brands fa-google"></i></span> <span className='continueGoogle'>Continue with Google</span></button>
                    <p>Don't have an account? <span className='loginLink'><Link to={'/register'}> Create an account</Link></span></p>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;