import React, { useState, useEffect } from 'react';
import signinAction from '../actions/signin.action';
import { useDispatch, useSelector } from 'react-redux';
import httpService from '../utils/http.service';
import Dashboard from './Dashboard';



const Signin = () => {
    const { isloggedIn } = useSelector(state => state.user)
    console.log('check if logged in ', isloggedIn)
    const dispatch = useDispatch()
    const [userId, setUserId] = useState(null);
    const [password, setPassword] = useState(null);
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);


    const userHandler = (event) => {
        setUserId(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }
    const loginHandler = async () => {
        if (!userId) {
            setUserErr(true)
            return;
        }
        if (!password) {
            setPasswordErr(true)
            return;
        }
        /*if (!userId) {
            setUserErr(true)
            return;
        }
        if (!password) {
            setPasswordErr(true)
            return;
        }
        */

        const loginResponse = await httpService.login({ userId, password });
        if (loginResponse.status == 200 && loginResponse.data?.status !== 401) {
            setLoginSuccess(true);
            setLoginFailed(false)

            dispatch(signinAction.signinSuccess())
        } else {
            setLoginFailed(true)
            setLoginSuccess(false);

        }
        // dispatch(signinAction.signin(userId, password))
    }


    return (
        <div className='row mt-5 mb-5 ml-5 mr-5'>
            <div className='col-lg-4 offset-lg-8 col-md-4 offset-md-8 col-xs-12 col-sm-12 pt-5 pb-5 pr-5 pl-5 form-content'>
                {
                    loginSuccess && (<p className='text-center text-success'>Login successfully.</p>)
                }
                {
                    loginFailed && (<p className='text-center text-danger'>Invalid credential.</p>)
                }
                {
                    !loginSuccess && (<form >
                        <div className="form-group form-check">
                            <div className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <img src={require('../assets/user.png')} className='form-img' />
                                    </div>
                                </div>
                                <input type="text" name='userId' className="form-control" id="inlineFormInputGroupUsername2" placeholder="User id" value={userId} onChange={userHandler} required />
                            </div>
                            {userErr && (<div><p className='text-danger'>Please enter user id.</p></div>)}
                        </div>
                        <div className="form-group form-check">
                            <div className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <img src={require('../assets/password.png')} className='form-img' />
                                    </div>
                                </div>
                                <input type="passowrd" name='password' className="form-control" id="inlineFormInputGroupUsername2" placeholder="Password" value={password} onChange={passwordHandler} required />
                            </div>
                            {passwordErr && (<div><p className='text-danger'>Please enter password.</p></div>)}
                        </div>

                        <div className='form-group mt-4 mb-4'>
                            <div className='d-flex justify-content-center'>
                                <button type="button" className="btn btn-danger" onClick={loginHandler}>Submit</button>
                            </div>
                        </div>
                        <div className='form-group mt-1 mb-3'>
                            <div className='d-flex justify-content-center'>
                                <img src={require('../assets/rakbank-logo.jpg')} className='form-logo' />
                            </div>
                        </div>
                        <div className='form-group mt-1 mb-3'>
                            <div className='d-flex justify-content-center'>
                                <p className='text-info'><b>UserId/Password :</b> rishabh/rishabh</p>
                            </div>
                        </div>
                    </form>
                    )
                }
            </div>
        </div>
    )
}


export default Signin;