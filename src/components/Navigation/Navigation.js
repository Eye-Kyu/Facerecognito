import React from "react";
import 'tachyons';

const Navigation = () =>  {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <p className="tr f4 link dim black b u pr2 pointer">Sign Out</p>
        </nav>
    )
}


export default Navigation;