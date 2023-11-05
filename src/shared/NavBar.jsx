import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext);

const handleLogOut=()=>{
logoutUser()
}


    return (
      <div className="my-4 mx-6 flex justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img
            className="w-10 h-10"
            src={
              user.photoUrl
                ? photoUrl
                : "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
            }
            alt=""
          />
          <h1 className="text-white font-bold">{user.displayName}</h1>
          {user ? (
            <button className={()=>handleLogOut()} className="btn btn-primary">Logout</button>
          ) : (
            <button className="btn btn-primary">Login</button>
          )}
        </div>
      </div>
    );
};

export default NavBar;