import React from 'react';
import errorPage from '../assets/images/404/404.gif';

const ErrorElement = () => {
    return (
        <div className=' flex justify-center'>
            <img className='' src={errorPage} alt="" />
        </div>
    );
};

export default ErrorElement;