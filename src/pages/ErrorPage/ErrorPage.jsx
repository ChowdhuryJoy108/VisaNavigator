import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status, statusText} = useRouteError()
    return (
        <div className='mx-2'>
            <div className="bg-error w-full flex flex-col gap-8 items-center my-8 py-8 rounded-lg lg:max-w-[1200px] lg:mx-auto">
            <h1 className="text-4xl px-2 lg:text-8xl">{status || 404} </h1>
            <h1 className="text-xl text-center px-2 font-semibold lg:text-2xl">Oops! {status || 404 } Page || Content you are trying to fetch is {statusText || 'Not Found'}!</h1>
            <span className="text-base btn btn-error text-gray-800 lg:text-xl">Specifically Mentioned : {error?.message}</span>
            <p className="text-lg text-center  px-4 w-full lg:w-[500px]">Here is the helpful link below which will take you to the Home Page.</p>
            <Link className="btn btn-outline px-6 py-1" to='/'>Home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;