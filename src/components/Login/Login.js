import React, { useRef } from 'react';
import './Login.css';

import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SocialLogin from './SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

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
        // navigate(from, { replace: true });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post(`https://secure-waters-74032.herokuapp.com/login`, {email})
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true }); 
    }


    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent");
        } else {
            toast("Please enter email address");
        }

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
                <p className="my-4">Don't have an account? <span><Link to='/register'>Register from here</Link></span></p> 
                <p>Forgot Password? <button className="btn btn-link" onClick={resetPassword}>Reset from here</button> </p> 
                {errorElement}
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;