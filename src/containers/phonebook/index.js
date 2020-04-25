import React, { Component } from 'react'
import PhoneItem from '../../components/phoneItem'
import HttpService from '../../utils/HttpService'
import Load from '../../components/load'
import './phonebook.css'

class Phonebook extends Component {

  state = {
    phoneBook: [],
    isLoad: true,
  }

  async getPhonebookList() {
    try {
      const data = await HttpService.get('http://localhost:4000/phoneBook')
      this.setState({ phoneBook: data })
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      this.setState({
        ...this.state,
        isLoad: false,
      })
    }
  }

  componentDidMount() {
    this.getPhonebookList()
  }

  render() {
    return(
      <>
        {this.state.isLoad ? (
          <Load />
        ) : (
          <div className="wrapper">
            <header className="header">
              <h1>Phonebook</h1>
              <div>
                <button className="btn btn-primary">Novo Contato</button>
              </div>
            </header>
            <div className="container">
              {this.state.phoneBook.map(({name, phoneNumber, phoneType, id}) => (
                <div key={id}>
                  <PhoneItem name={name} number={phoneNumber} phoneType={phoneType} />
                </div>
              ))}
              
            </div>
        </div>
        )}
      </>
    )
  }
}

export default Phonebook