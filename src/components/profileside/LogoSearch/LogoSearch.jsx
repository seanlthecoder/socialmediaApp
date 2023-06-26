import React from 'react';
import LOGO4 from '../../../img/mountain.jpg'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src={LOGO4} alt="" />
            <div className="Search">
            <input type="text" placeholder='#Explore' />
            <div className="s-icon">
                <UilSearch />
            </div>

            </div>
        </div>
    );
}

export default LogoSearch;








