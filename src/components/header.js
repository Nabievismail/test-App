import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='header'>
            <Link to='/'>Add Test</Link>
            <Link to='/pass-test'>Pass the Test</Link>
            </header>
        </div>
    );
};

export default Header;