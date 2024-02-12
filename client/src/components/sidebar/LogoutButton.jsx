import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout.js';

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className="mt-auto pt-5">
            {!loading ? (
                <BiLogOut onClick={logout}
                    className='w-6 h-6 text-white cursor-pointer'
                />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    )
}

export default LogoutButton