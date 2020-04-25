import React, { Component } from 'react'
import Header from '../../components/header'
import PhoneItem from '../../components/phoneItem'
import { CardAction } from '../../components/cards'
import Load from '../../components/load'
import Button from '../../components/button'
import HttpService from '../../utils/HttpService'

class PhonebookDetail extends Component {

  state = {
    phonebook: {},
    isLoad: true,
  }

  handleClickBack() {
    this.props.history.push('/')
  }

  handleClickNewPhonebook() {
    this.props.history.push('/new-phonebook')
  }

  handleClickEdit(id) {
    this.props.history.push(`/phonebook/${id}`)
  }

  async getUserData() {
    try {
      const data = await HttpService.get(`phonebook/${this.props.match.params.phoneId}`)
      this.setState({phonebook: data})
    } catch(error){
      console.error(error)
    } finally {
      this.setState({
        ...this.state,
        isLoad: false
      })
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  render() {
    const {phonebook: {id, name, email, nickName, phoneNumber, phoneType}, isLoad} = this.state
    return (
      <>
        {isLoad ? (
          <Load />
        ):(
          <>
          <Header title={name}>
            <Button variant='primary' onClick={()=> this.handleClickNewPhonebook() }>Novo Contato</Button> 
          </Header>
          <PhoneItem 
            name={nickName}
            number={phoneNumber}
            email={email}
            phoneType={phoneType}
          >
            <CardAction>
              <Button onClick={()=> this.handleClickBack()}>Voltar</Button>
              <Button variant="primary"  onClick={()=> this.handleClickEdit(id)}> Editar</Button>
            </CardAction>
          </PhoneItem>
          </>
        )}
      </>
    );
  }
}

export default PhonebookDetail