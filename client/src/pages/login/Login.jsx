import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
                    Welcome
                    <span className='text-blue-300'>&nbsp;Back</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-semibold text-black'>
                                Username :
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Username'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-semibold text-black'>
                                Password :
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>
                    <Link to="/signup"
                        className='text-sm hover:underline hover:text-blue-500 inline-block mt-3'
                    >{"Don't"} have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block mt-2'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login