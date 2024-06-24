import React from "react";
import { Tilt } from 'react-tilt'
import 'tachyons';
import './Logo.css';
import Eye from './Eye.png';

const Logo = () =>  {
    return (
       <div className='ma3 mt1'>
            <Tilt className="Tilt br2 shadow-2" options={{max : 35}} style={{ height: 80, width: 120 }}>
            <div className="Tilt-inner">
                <img src={Eye} alt='logo' />
            </div>
            </Tilt>
       </div>
    )
}


export default Logo;