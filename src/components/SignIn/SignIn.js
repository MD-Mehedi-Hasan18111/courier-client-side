import React from 'react';
import './SingIn.css';
import useAuth from '../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {

    const {setUser, signInGoogle, setIsLoading} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirects_url = location.state?.from || '/home';

    const googleLogin = () =>{
        signInGoogle()
        .then(res => {
            setUser(res.user);
            history.push(redirects_url);
        })
        .catch(error =>{
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <Header />
            <div className="signin">
                <div className="signin-area text-center border border-1 border-secondary rounded-2 mt-4 mx-auto">
                    <h3>Login</h3>
                    <div>
                        <button onClick={googleLogin} className="g-btn d-flex align-items-center mx-auto"><i className="fab fa-google"></i> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;