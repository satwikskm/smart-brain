import React from'react';
import Tilt from 'react-tilt';
import './Logo.css';
const Logo=()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                    <div className="Tilt-inner pa5"> <a href="https://www.freeiconspng.com/img/2524" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/brain-icons-3.png" width="150" alt="brain icons"  /></a> </div>
            </Tilt>

        </div>

    )
}

export default Logo;