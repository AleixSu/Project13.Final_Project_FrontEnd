import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import Button from '../../UI/button/Button'
import { useModalContext } from '../../../context/ModalContext'
import { useAuthContext } from '../../../context/AuthContext'
import MenuProfile from './MenuProfile'

const Header = () => {
  const { openLogin } = useModalContext()
  const { user } = useAuthContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header>
      <img src='/images/lightLogo.png' alt='logoImg' />
      <nav>
        <ul id='headerUl'>
          <li>
            <NavLink to=''>HOME</NavLink>
          </li>
          <li>
            <NavLink to='Events'>EVENTS</NavLink>
          </li>
          <li>
            <NavLink to='Locations'>LOCATIONS</NavLink>
          </li>
          <li style={{ position: 'relative' }}>
            {!user ? (
              <Button
                text='LOGIN/REGISTER'
                className='loginHeader'
                fnc={openLogin}
              />
            ) : (
              <>
                <button className='profileHeader' onClick={toggleMenu}>
                  <div>
                    <div id='divImgProfile'>
                      <img
                        src={user.profileImg || '/images/noProfileImg.png'}
                        alt='profileImg'
                      />
                    </div>
                    <h3>
                      {user.name && user.frstSurname
                        ? `${user.name} ${user.frstSurname}`
                        : user.nickName || 'PROFILE'}
                    </h3>
                  </div>
                </button>

                <MenuProfile isOpen={isMenuOpen} closeMenu={closeMenu} />
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
