import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { googleSignIn } = useFirebase();
    return (
        <div className="login">
            <Card className='mx-auto cardLogin'>
                <Card.Body className='loginCard'>
                    <Card.Title className='titleLogin text-primary'>Please Register</Card.Title>
                    <button onClick={googleSignIn} className='googleBtn'> <span className='googleIcon'><i class="fa-brands fa-google"></i></span> <span className='continueGoogle'>Create google account</span></button>
                    <p>You are register yet? <span className='loginLink'><Link to={'/login'}> Login with us</Link></span></p>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;