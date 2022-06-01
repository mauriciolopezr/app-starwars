import React from 'react'

const Navbar = ({titulo}) => {

    return (
            //Estructura del Navbar
            <nav className='navbar navbar-dark bg-dark' >
                <div className='container'>
                <a className = "navbar-brand text-warning text-uppercase" href = "/">
                    {titulo}
                </a>
                </div>          
            </nav> 
    )    
} 

export default Navbar;