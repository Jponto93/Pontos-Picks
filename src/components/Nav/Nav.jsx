import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Ponto's Picks</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {user.access_level > 0 && (
          <>
            <Link className="navLink" to="/admin">
              Admin
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && user.access_level === 0 && (
          <>

            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/picks">
              Make Picks
            </Link>

            <Link className="navLink" to="/profile">
              Profile
            </Link>
            
            <Link className="navLink" to="/leaderboard">
              Leaderboard
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
