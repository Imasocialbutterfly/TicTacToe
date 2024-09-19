import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from './Header.styled'
import {ReactComponent as Logo } from '../../assets/svgs/tic-tac-toe-game-svgrepo-com (1).svg'

 function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeaderWrapper>
      <Logo className='logo'/>
      <span onClick={() => toggleTheme()}>
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  )
}

export default Header
