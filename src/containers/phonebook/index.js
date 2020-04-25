import React, { Component } from 'react'
import PhoneItem from '../../components/phoneItem'
import HttpService from '../../utils/HttpService'
import Header from '../../components/header'
import Load from '../../components/load'
import Button from '../../components/button'
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
          <>
            <Header>
              <Button variant='primary' size="small">Novo Contato</Button> 
            </Header>
            <div className="container">
              {this.state.phoneBook.map(({name, phoneNumber, phoneType, id}) => (
                <div key={id}>
                  <PhoneItem name={name} number={phoneNumber} phoneType={phoneType} />
                </div>
              ))}
           </div>
          </>
        )}
      </>
    )
  }
}

export default Phonebook