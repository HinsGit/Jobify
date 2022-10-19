import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar.js'
import {AiTwotoneHome} from "react-icons/ai"
import AiFillProfile from "react-icons/ai"
import MdPersonSearch from "react-icons/md"
import AiOutlineFileAdd from "react-icons/ai"
import {FaAlignLeft, FaUserCircle, FaCaretDown} from "react-icons/fa"
import { useAppContext } from '../context/appContext.js'
import Logo from './Logo.js'


const Navbar = () => {
  const {user,toggleSidebar,logOut} = useAppContext() 
  const [showLogout, setShowLogout] = useState(false)
  return (
    <Wrapper>
        <div className='nav-center'>
            <button className='toggle-btn' onClick={()=>{
                toggleSidebar()

            }}>
                <FaAlignLeft/>
            </button>
            <div>
                <Logo />
                <h3 className='logo-text'>Dashboard</h3>
            </div>
            <div className='btn-container'>
                <button className='btn' type='button' onClick={()=>{
                    setShowLogout(!showLogout)
                }}>
                    <FaCaretDown/>
                    {user.name}
                    <FaUserCircle/>
                </button>
                <div className= {showLogout?'dropdown show-dropdown':"dropdown"}>
                    <button type='button' className='dropdown-btn' onClick={()=>{
                    logOut()}}>
                        Logout
                    </button>
                </div>


            </div>

            
        </div>
    </Wrapper>
  )
}

export default Navbar
