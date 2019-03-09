import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <div>
        <Link to='/'>Home</Link> | <Link to='/Main'>Main</Link> | <Link to='/Contact'>Contact</Link> | <Link to='/Resume'>Resume</Link> | <Link to='/Projects'>Projects</Link> 
        <hr />       
      </div>
    )
}








export default Navbar