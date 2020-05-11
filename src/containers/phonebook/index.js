import React, { Component } from 'react'
import { Item, ItemPagination } from '../../components/phoneItem'
import HttpService from '../../utils/HttpService'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import Load from '../../components/load'
import { CardAction } from '../../components/cards'
import Button from '../../components/button'
import Painel from '../../components/painel'
import logo from '../../logo-cervejaria.svg'


import './phonebook.css'


class Phonebook extends Component {
  state = {
    beers: [],
    isLoad: true,
    qtdPage:0,
  }

  async getbeersList() {
    try {
      const data = await HttpService.get('beers')
      const length = data.length;
      this.setState({ beers: data,
      qtdPage:length })
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
    this.props.history.push(`/beers/${id}`)
  }

  handleClickNewPhonebook() {
    this.props.history.push('/new-phonebook')
  }

  async handleDelete(userId) {
    try {
      const data = await HttpService.del(`phoneBook/${userId}`)
      this.getPhonebookList()
      return data
    }catch(error){
      console.error(error)
    }finally{
      this.setState({ isLoad: false })
    }
   
  }

  componentDidMount() {
    this.getbeersList()
  }

  render() {
    const  {qtdPage} = this.state
    console.log(qtdPage)
    return(
      <>
        {this.state.isLoad ? (
          <Load />
        ) : (
          <>
            
            <Header>
              <div>
                <img src={logo} className="logo"/>
              </div>
            </Header>
            
            <Painel>
            </Painel>

            <Wrapper>
            <div className="container">
              {this.state.beers.map(({name, tagline, first_brewed, description,image_url, id}) => (
                <div key={id}>
                  <Item 
                    name={name}
                    email={tagline}
                    urlImg={image_url}
                    nameImg={name}
                  >
                    <CardAction variant="card--actions-overlay">
                      <Button size="large" variant="primary" onClick={() => this.handleClickDetail(id)}> Detalhes</Button>
                    </CardAction>
                  </Item>
                </div>
              ))}

            
           </div>
           <ItemPagination>
             {
              <li><a href="#">1</a></li>
             }
           </ItemPagination>
           </Wrapper>
          </>
        )}
      </>
    )
  }
}

export default Phonebook