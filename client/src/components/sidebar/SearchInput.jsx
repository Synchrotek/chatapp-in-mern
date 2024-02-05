import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <form>
            <input type="text"
                className='input input-bordered rounded-full'
                placeholder='Search...'
            />
            <button type='submit'
                className='btn btn-circle ml-1 bg-sky-500 text-white'
            >
                <FaSearch className='w-4 h-4 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput