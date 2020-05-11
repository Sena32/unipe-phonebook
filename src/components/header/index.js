import React from 'react'
import './header.css'

const Header = ({title= 'Phonebook' , children}) => (
  <header className="header">
    
      {children}

  </header>
)

export default Header