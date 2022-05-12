import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/logos, icons/Google__G__Logo.svg.png';
import github from '../../../images/logos, icons/github.png';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGoogle(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const navigate = useNavigate();

    let errorElement;


    if(loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <p className="mx-auto text-center font-bold">Or continue with:</p>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-light border shadow w-50 mt-3 mx-auto d-block">
                <img style={{ width: '30px', height: '30px', background: "white", padding: '3px', borderRadius: '50%', marginRight: "15px" }} src={google} alt="" />
                Sign in with google
            </button>
            <button
                onClick={() => signInWithGithub()}
                className="btn btn-light border shadow w-50 mt-3 mx-auto d-block">
                <img style={{ width: '30px', height: '30px', background: "white", padding: '3px', marginRight: "15px" }} src={github} alt="" />
                Sign in with github
            </button>
        </div>
    );
};

export default SocialLogin;