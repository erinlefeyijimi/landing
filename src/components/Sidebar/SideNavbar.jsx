import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './SideNavbar.css';
import { IconContext } from 'react-icons';
import {BiExpand} from 'react-icons/bi'
import {MdExitToApp} from 'react-icons/md'


function SideNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidenavbar'>
          <Link to='#' className='menu-bars'>
            <BiExpand onClick={showSidebar} className='adminsidebar__icon'/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <MdExitToApp />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
         
        </nav>
        
      </IconContext.Provider>
    </>
  );
}

export default SideNavbar;