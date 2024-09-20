import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from './Header.styled'
import {ReactComponent as Logo } from '../../assets/svgs/tic-tac-toe-game-svgrepo-com (1).svg'
import { useNavigate } from 'react-router-dom'

 function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const navigate = useNavigate()

  return (
    <HeaderWrapper>
      <Logo className='logo' onClick={() => navigate('/')}/>
      <span onClick={() => toggleTheme()}>
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  )
}

export default Header
