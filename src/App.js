import React, { useEffect, useState } from 'react';
import Loading from './components/loading';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { useSelector } from 'react-redux';

const App = () => {

    const [loading, setLoading] = useState(true)
    const { isloggedIn } = useSelector((state) => state.user);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 7000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {
                !isloggedIn && loading && (<div className='d-flex justify-content-center'><Loading /></div>)
            }
            {
                !isloggedIn && !loading && (<div className='col-lg-12 col-md-12 col-sm-12'><Signin /></div>)
            }
            {
                isloggedIn && !loading && (<Dashboard />)
            }
        </>
    )
}


export default App;