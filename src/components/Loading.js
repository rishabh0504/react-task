import React, { useEffect, useState } from 'react';
import Signin from './Signin';
const Loading = () => {

    const [progress, setProgress] = useState(0)
    const [slider, setSlider] = useState('loading')

    useEffect(() => {
        // Updating progressbar after a particular time period

        const timer = setTimeout(() => {
            setProgress(progress + 10)
        }, 1000);
        return () => {
            if (progress === 100) {
                // Sliding loading screen once progressbar loaded 100% and clearing timeout
                setSlider('login-slide')
                clearTimeout(timer);
            }
        };
    }, [progress]);
    return (
        <div className='h-100 col-lg-12 col-md-12 align-items-center'>
            {progress < 100 && (
                <div className={slider} >
                    <div className='loading-wrapper d-flex justify-content-center'>
                        <div className='x'>
                            <img className='element' src={require('../assets/logo.png')} />
                        </div>
                    </div>

                    <div className='col-lg-6 offset-lg-3 co-md-6 offset-md-3 col-sm-12 col-xs-12 mt-3'>
                        <div className="progress mt-5">
                            <div className="progress-bar bg-danger" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    <div className='col-lg-12 co-md-12 col-sm-12 col-xs-12 mt-3'>
                        <p className='text-center'>Loading...</p>
                    </div>
                </div>
            )
            }
            {
                progress >= 100 && (<Signin />)
            }


        </div>
    )
}

export default Loading;



/**
 *
 *
 *  <div className="progress mt-5">
                <div className="progress-bar bg-danger" style={{ width: `${progress}%` }}></div>
            </div>
            <div className='col-lg-12 co-md-12 col-sm-12 col-xs-12 mt-3'>
                <p className='text-center'>Loading...</p>
            </div>
 */