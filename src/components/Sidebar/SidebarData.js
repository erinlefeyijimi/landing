import React from 'react';
import {MdOutlineDashboard} from 'react-icons/md';
import {BiCabinet} from 'react-icons/bi';
import {MdNewLabel} from 'react-icons/md'
import {RiMailSettingsFill} from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin',
    icon: <MdOutlineDashboard className="dashboard__icon"/>,
    cName: 'nav-text'
  },
  {
    title: 'All Post',
    path: '/admin/all-blogs',
    icon: <BiCabinet className="dashboard__icon"/>,
    cName: 'nav-text'
  },
  {
    title: 'Create New Post',
    path: '/create-blog',
    icon:<MdNewLabel className="dashboard__icon"/>,
    cName: 'nav-text'
  },
  {
    title: 'Mailing List',
    path: '/admin/mailing',
    icon:<RiMailSettingsFill className="dashboard__icon"/>,
    cName: 'nav-text'
  },
];