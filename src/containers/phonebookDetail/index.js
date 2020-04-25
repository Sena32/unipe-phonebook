import React, { Component } from 'react'
import Header from '../../components/header'
import Button from '../../components/button'

class PhonebookDetail extends Component {
  render() {
    return (
      <>
       <Header>
        <Button variant='primary' size="small">Novo Contato</Button> 
      </Header>
       <div>Detalhamento do contato</div>
      </>
    );
  }
}

export default PhonebookDetail