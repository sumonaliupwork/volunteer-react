import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <Card className='mx-auto cardLogin'>
                <Card.Body className='loginCard'>
                    <Card.Title className='titleLogin'>Login with us</Card.Title>
                    <button className='googleBtn'> <span className='googleIcon'><i class="fa-brands fa-google"></i></span> <span className='continueGoogle'>Continue with Google</span></button>
                    <p>Don't have an account? <span className='loginLink'><Link to={'/register'}> Create an account</Link></span></p>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;