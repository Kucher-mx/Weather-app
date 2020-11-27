import React from 'react';
import NavLinks from './HeaderCmps/NavLinks';
import classes from './Styles/Header.module.css';
import { Link } from 'react-router-dom';
import NavInput from './HeaderCmps/Input';

const Header = () => {
    // console.log(classes);
    const cls = [classes.Header, 'navbar navbar-expand-lg'];
    return (
        <nav className={cls.join(' ')}>
            <div className='container'>
                <Link className={classes.logo} href="/" to="/">Weather-App</Link>
                <NavLinks />
                <NavInput />
            </div>
        </nav>
    )
}

export default Header;