import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LinkedinLogo from './icons/linkedin-svgrepo-com.svg'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className = 'header'>
        
            <div className="header__left">
                <img src={LinkedinLogo} alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationIcon} title='Notifications' />
                <HeaderOption avatar='https://media-exp3.licdn.com/dms/image/C4D35AQEMj_SJTnyxbw/profile-framedphoto-shrink_400_400/0/1611750686403?e=1625590800&v=beta&t=d_vLn58iQpsYcod9yx4ig3AQS9ca6l2w_L3o5b2OZAo' 
                title='Me' />
                
            </div>
        </div>
    );
}

export default Header
