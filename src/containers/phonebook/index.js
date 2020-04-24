import React, { Component } from 'react'
import PhoneItem from '../../components/phoneItem'
import './phonebook.css'

class Phonebook extends Component {
  render() {
    return(
      <div className="wrapper">
        <header className="header">
          <h1>Phonebook</h1>
          <div>
            <button className="btn btn-primary">Novo Contato</button>
          </div>
        </header>
        <div className="container">
          <PhoneItem name={'Zezin'} phone={'9999-9999'} />
          <PhoneItem name={'Maria'} phone={'9999-7777'} />
          <PhoneItem name={'Nélio'} phone={'9999-5566'} />
        </div>
      </div>
    )
  }
}

export default Phonebook