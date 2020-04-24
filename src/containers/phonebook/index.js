import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faUser } from '@fortawesome/free-solid-svg-icons'
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
          <div className="phoneContainer">
            <div className="card">
              <div className="card-content">
                <ul className="phoneItem">
                  <li><FontAwesomeIcon icon={faMobileAlt} /> Zezin</li>
                  <li><FontAwesomeIcon icon={faUser} /> 9999-8888</li>
                </ul>
              </div>
              <div className="card--actions">
                <button className="btn btn-small">Apagar</button>
                <button className="btn btn-small">Detalhes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Phonebook