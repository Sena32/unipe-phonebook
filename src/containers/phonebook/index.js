import React, { Component } from 'react'
import PhoneItem from '../../components/phoneItem'
import HttpService from '../../utils/HttpService'
import Header from '../../components/header'
import Load from '../../components/load'
import { CardAction } from '../../components/cards'
import Button from '../../components/button'
import './phonebook.css'

class Phonebook extends Component {
  state = {
    phoneBook: [],
    isLoad: true,
  }

  async getPhonebookList() {
    try {
      const data = await HttpService.get('phoneBook')
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

  handleClickDetail(id) {
    this.props.history.push(`/phonebook-detail/${id}`)
  }

  handleClickNewPhonebook() {
    this.props.history.push('/new-phonebook')
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
              <Button variant='primary' onClick={() => this.handleClickNewPhonebook()}>Novo Contato</Button> 
            </Header>
            <div className="container">
              {this.state.phoneBook.map(({name, phoneNumber, email, phoneType, id}) => (
                <div key={id}>
                  <PhoneItem 
                    name={name}
                    number={phoneNumber}
                    email={email}
                    phoneType={phoneType}
                  >
                    <CardAction>
                      <Button size="small">Apagar</Button>
                      <Button size="small" onClick={() => this.handleClickDetail(id)}> Detalhes</Button>
                    </CardAction>
                  </PhoneItem>
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