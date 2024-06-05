import React from 'react';
import cleverBooksLogo from '../resources/clever_books_logo.png';
import '../styles/Header.css';

function Header() {
    return (
        <div className='navbar'>
            <span className='logo'>
                <img src={cleverBooksLogo} alt='logo' width={75} height={'auto'}/>
                {/* <button>CLEVER BOOKS</button> */}
            </span>
            <span>
                <button >Products</button>
                <button >Pricing</button>
                <button >Industry</button>
                <button >Customer Stories</button>
                <button >About</button>
                <button >Blog</button>
            </span>
            <span className='helpers'>
                <button className='login'>Login</button>
                <button className='talk-to-us'>Talk to Us</button>
            </span>
        </div>
    );
}

export default Header;
