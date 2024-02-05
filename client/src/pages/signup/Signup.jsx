import React from 'react'
import GenderChkBox from './GenderChkBox'

const Signup = () => {
    return (<div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
                <span className='text-blue-300'>Let's</span>
                &nbsp;Sign Up
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text labelText-1'>
                            Full Name :
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text labelText-1'>
                            Username :
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder='Enter an username'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text labelText-1'>
                            Password :
                        </span>
                    </label>
                    <input
                        type="password"
                        placeholder='Enter password'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text labelText-1'>
                            Confirm Password :
                        </span>
                    </label>
                    <input
                        type="password"
                        placeholder='Confirm password'
                        className='w-full input input-bordered h-10'
                    />
                </div>

                <GenderChkBox />

                <a href="#"
                    className='text-sm hover:underline hover:text-blue-500 inline-block mt-2'
                >Already have an account?
                </a>
                <div>
                    <button className='btn btn-block mt-2'>
                        Sign Up
                    </button>
                </div>
            </form>

        </div>
    </div>
    )
}

export default Signup