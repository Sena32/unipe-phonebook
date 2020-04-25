import React, { Component } from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import { Card, CardContent, CardAction } from '../../components/cards'
import HttpService from '../../utils/HttpService'
import './newPhonebook.css'
class NewPhonebook extends Component {
  state ={
    phonebook: {
      name: '',
      nickName: '',
      email: '',
      phoneNumber: '',
      phoneType: 'Residencial'
    },
    erros: {
      name: false,
      nickName: false,
      email: false,
      phoneNumber: false,
    }
  }

  isValidateForm = () => {
    const getInput = Object.values(this.state.phonebook)
    const isValidInput = getInput.every(elem => elem !== "")

    return isValidInput
  }

  handleChange = event => {
    this.setState({
      phonebook: {
        ...this.state.phonebook,
        [event.target.name]: event.target.value
      }
     })
  } 
  
  sendData = async payload => {
    const data = await payload

    return HttpService.post(data)
  }

  handleSubmit = evento => {
    evento.preventDefault()
    const isValidForm = this.isValidateForm()
    if(isValidForm) this.sendData(this.state.phonebook)

    else return false
  }

  render() {
    return(
      <>
        <Header>
          <Button variant='primary'>Agenda Telefônica</Button> 
        </Header>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <CardContent>
              <label className="text-field">
                <span>Nome</span>
                <input 
                  type="text" 
                  placeholder="Nome" 
                  name="name"
                  onChange={this.handleChange} 
                  value={this.state.name} 
                />
                {this.state.erros.name &&
                  <div className="erros">O Campo Nome é Obrigatório</div>
                }
                
              </label>
             
              <label className="text-field">
                <span>Apelido</span>
                <input 
                  type="text"
                  placeholder="Apelido"
                  name="nickName"
                  onChange={this.handleChange}
                  value={this.state.nickName} 
                />
                 {this.state.erros.nickName &&
                  <div className="erros">O Campo Apelido é Obrigatório</div>
                 }
              </label>

              <label className="text-field">
                <span>Email</span>
                <input 
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                {this.state.erros.email &&
                  <div className="erros">O Campo Email é Obrigatório</div>
                 }
              </label>

              <label className="text-field">
                <span>Telefone</span>
                <input type="text"
                  placeholder="Telefone"
                  name="phoneNumber"
                  onChange={this.handleChange}
                  value={this.state.phoneNumber}
                />
                 {this.state.erros.phoneNumber &&
                  <div className="erros">O Campo Telefone é Obrigatório</div>
                 }
              </label>

              <label className="text-field">
                Tipo de telefone
                <select name="phoneType"
                    onChange={this.handleChange}
                    value={this.state.phoneType}
                >
                  <option>Residencial</option>
                  <option>Celular</option>
                </select>
              </label>

            </CardContent>
            <CardAction>
              <Button variant='primary' type="submit">Enviar</Button>
            </CardAction>
          </form>
        </Card>
      </>
    )
  }
}

export default NewPhonebook