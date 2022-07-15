import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'
import TinderLogo from './tinder.png'
import './header.css';
function Header(props) {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <IconButton>
            <img className="header__logo" alt="Tinder Logo"  src={TinderLogo} />
            </IconButton>
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
        </div>
    );
}

export default Header;