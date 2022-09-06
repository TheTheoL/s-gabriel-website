import React from 'react';
import './nav.scss';
import logo from '../../img/owlblack.png';

export const Nav = () => {
    return (
        <div className='navbar'>

            <h1 className='name'>Susan Krantz Gabriel</h1>


            <div className='logo'>
                <img className='logo-div' src={logo} alt="Owl icon" />
            </div>



            <ul className='links'>
                <li><a href="#top">About</a></li>
                <li><a href="#vita-section">Vita</a></li>
                <li><a href="#publications">Publications</a></li>
            </ul>
        </div>
    )
}
