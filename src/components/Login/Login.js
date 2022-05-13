import React, { useRef } from 'react';
import './Login.css';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SocialLogin from './SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');


    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const navigate = useNavigate();

    let errorElement;


    if(loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        console.log(user)
    }


    return (
        <div className="login">
            <div className="container w-50 mx-auto my-5 border p-5 rounded">
                <h3>Please login to proceed</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Don't have an account? <span><Link to='/register'>Register from here</Link></span></p> 
                {errorElement}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;