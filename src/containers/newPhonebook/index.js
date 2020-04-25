import React, { Component } from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import { Card, CardContent, CardAction } from '../../components/cards'
import './newPhonebook.css'

class NewPhonebook extends Component {
  state ={
    phonebook: {
      name: '',
      nickName: '',
      email: '',
      phoneNumber: '',
      phoneType: 'Residencial'
    }
  }

  handleChange = event => {
    this.setState({
      phonebook: {
        ...this.state.phonebook,
        [event.target.name]: event.target.value
      }
     })
  } 
  
  render() {
    return(
      <>
        {console.log(this.state.phonebook)}
        <Header>
          <Button variant='primary'>Agenda Telefônica</Button> 
        </Header>
        <Card>
          <form>
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
              </label>

              <label className="text-field">
                <span>Telefone</span>
                <input type="text"
                  placeholder="Telefone"
                  name="phoneNumber"
                  onChange={this.handleChange}
                  value={this.state.phoneNumber}
                />
              </label>

              <label>
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