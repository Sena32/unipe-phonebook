import React from 'react'
import './header.css'

const Header = ({title= 'Phonebook' , children}) => (
  <header className="header">
    <h1>{title}</h1>
    <div>
      {children}
    </div>
  </header>
)

export default Header