import React, { Component } from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import { Card, CardContent, CardAction } from '../../components/cards'
import { TextField } from '../../components/form'
import HttpService from '../../utils/HttpService'
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

  handleClickPhonebook= () => {
    const history = this.props.history
    history.push('/' )
  }
  
  isValidateForm = () => {
    const getInput = Object.values(this.state.phonebook)
    const isValidInput = getInput.every(elem => elem !== "")

    return isValidInput
  }

  showErros = () => {
    const getInputErro = this.state.phonebook
    const entries = Object.entries(getInputErro)
    let getErros = {}
    for(const[key, values] of entries) {
      if(values==="") getErros[key] = true
      else getErros[key] = false
    }

    this.setState({
      erros: getErros
    })
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
    try {
      const data = await payload
      return HttpService.post(data)
    } catch(error) {
      console.error(error)
    } finally {
      alert('Contato inserido com sucesso')
      this.props.history.push('/')
    }
  }

  handleSubmit = evento => {
    evento.preventDefault()
    const isValidForm = this.isValidateForm()
    if(isValidForm) this.sendData(this.state.phonebook)
    else {
      this.showErros()
      return false
    }
  }

  render() {
    return(
      <>
        <Header>
          <Button variant='primary' onClick={() => this.handleClickPhonebook()}>Agenda Telefônica</Button> 
        </Header>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <CardContent>
              <TextField 
                label="Nome"
                name="name"
                onChange={this.handleChange}
                value={this.state.phonebook.name}
                erros={this.state.erros.name}
              />
              <TextField 
                label="Apelido"
                name="nickName"
                onChange={this.handleChange}
                value={this.state.phonebook.nickName}
                erros={this.state.erros.nickName}
              />
              <TextField 
                label="Email"
                name="email"
                onChange={this.handleChange}
                value={this.state.phonebook.email}
                erros={this.state.erros.email}
              />

              <TextField 
                label="Telefone"
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.phonebook.phoneNumber}
                erros={this.state.erros.phoneNumber}
              />
              <label className="text-field">
                Tipo de telefone
                <select name="phoneType"
                    onChange={this.handleChange}
                    value={this.state.phonebook.phoneType}
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