import React, { useState } from 'react'
import GenderChkBox from './GenderChkBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup()

    const handleGenderChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    return (<div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-center text-gray-300 mb-2'>
                <span className='text-blue-300'>Let's</span>
                &nbsp;Sign Up
            </h1>

            <form onSubmit={handleSubmit}>
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
                        value={inputs.fullName}
                        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
                        value={inputs.username}
                        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                    />
                </div>

                <GenderChkBox
                    onGenderChange={handleGenderChange}
                    selectedGender={inputs.gender}
                />

                <Link to="/login"
                    className='text-sm hover:underline hover:text-blue-500 inline-block mt-2'
                >Already have an account?
                </Link>
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