import React, { useState, useEffect } from 'react';
import './AdminNavbar.css';
import {MdNotificationsActive} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai'
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState("adminhome");
  const navigate = useNavigate();

  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };
  
  const userId = user?.uid;
  console.log(user?.displayName);
  console.log(userId);

  const date = new Date();
  const getCurrentDate = date.toDateString();
  return (
    <>
        <div className="top__nav--container">
            <div className="top__nav--child">
                <p className="top__nav--heading">{getCurrentDate}</p>
            </div>
           
            <div className="top__nav--child top__nav-split">
               <AiOutlineUser className='top__nav--child-icon'/>
               <p>{user?.displayName}</p>
            </div>
            <div className="top__nav--child admin__logout">
               <p onClick={handleLogout}>Logout</p>
            </div>
        </div>
    </>
  )
}

export default AdminNavbar