// HOOKS
import { React } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className='container'>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Logout</button>
            <Link to='/home'> Home </Link>
            <Link to='/menu'> Menu </Link>
          </div>
        )}
        {!user && (
          <div>
            <button>
              {' '}
              <Link to='/signup'>Signup</Link>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
