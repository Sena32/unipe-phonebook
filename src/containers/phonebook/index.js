import React, { Component } from 'react'
import PhoneItem from '../../components/phoneItem'
import './phonebook.css'

const phoneBook = [
  {
    name: "José Nunes da Silva",
    phoneNumber: "9999-8888",
    email: "zezin@gmail.com",
    nickName: "Zezin",
    id: 1
  },
  {
    name: "Joao Silva Fopxs",
    phoneNumber: "9999-7788",
    email: "fopxs@gmail.com",
    nickName: "Fopxs",
    id: 2
  },
  {
    name: "Ana Júlia Lopes",
    phoneNumber: "9999-9613",
    email: "Anaju@gmail.com",
    nickName: "Anaju",
    id: 3
  },
  {
    name: "Mauro Luiz",
    phoneNumber: "9999-2014",
    email: "Maurin@gmail.com",
    nickName: "Maurin",
    id: 4
  }
]
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
          {phoneBook.map(phone => (
            <div key={phone.id}>
              <PhoneItem name={phone.name} phone={phone.phoneNumber} />
            </div>
          ))}
          
        </div>
      </div>
    )
  }
}

export default Phonebook