import React from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
function Header() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-p'>ROSE</p>
            </div>

            <div>
                <input className='search-input' placeholder='Search' type="text" />
            </div>
        </div>
    )
}

export default Header