import React, { Component } from 'react'
import PhoneItem from '../../components/phoneItem'
import './phonebook.css'

const phoneBook = [
  {
    name: "José Nunes da Silva",
    phoneNumber: "9999-8888",
    phoneType: "Celular",
    email: "zezin@gmail.com",
    nickName: "Zezin",
    id: 1
  },
  {
    name: "Joao Silva Fopxs",
    phoneNumber: "3322-7788",
    phoneType: "Residencial",
    email: "fopxs@gmail.com",
    nickName: "Fopxs",
    id: 2
  },
  {
    name: "Ana Júlia Lopes",
    phoneNumber: "3344-9613",
    phoneType: "Residencial",
    email: "Anaju@gmail.com",
    nickName: "Anaju",
    id: 3
  },
  {
    name: "Mauro Luiz",
    phoneNumber: "9999-2014",
    phoneType: "Celular",
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
          {phoneBook.map(({name, phoneNumber, phoneType, id}) => (
            <div key={id}>
              <PhoneItem name={name} number={phoneNumber} phoneType={phoneType} />
            </div>
          ))}
          
        </div>
      </div>
    )
  }
}

export default Phonebook