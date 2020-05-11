import React, { Component } from 'react'
import Header from '../../components/header'
import { CardAction, Card } from '../../components/cards'
import Load from '../../components/load'
import Button from '../../components/button'
import Painel from '../../components/painel'
import logo from '../../logo-cervejaria.svg';
import HttpService from '../../utils/HttpService'
import Wrapper from '../../components/wrapper'
import { ItemImg, ItemDetail, ItemDescription } from '../../components/phoneItem'




class PhonebookDetail extends Component {

  state = {
    beer: {},
    isLoad: true,
  }

  handleClickBack() {
    this.props.history.push('/')
  }

  handleClickNewbeer() {
    this.props.history.push('/new-beer')
  }

  handleClickEdit(id) {
    this.props.history.push(`/beer/${id}`)
  }

  async getUserData() {
    try {
      const data = await HttpService.get(`beers/${this.props.match.params.phoneId}`)
      this.setState({ beer: data })
    } catch (error) {
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
    const { name, tagline, first_brewed, description,image_url, id } = this.state.beer
    console.log(this.state.beer)
    
    return (
      <>
        {this.state.isLoad ? (
          <Load />
        ) : (
            <>
              <Header>
                <div>
                  <img src={logo} className="logo" />
                </div>
              </Header>
              <Painel title={name}>
              </Painel>
              
              <Wrapper variant="wrapper-flex">

                <ItemImg

                  urlImg={image_url}
                  nameImg={name}

                >
                </ItemImg>

                <ItemDetail

                  id={first_brewed}
                  email={tagline}

                >
                </ItemDetail>
                <ItemDescription

                  description={description}

                >
                  <h2>Descrição:</h2>
                </ItemDescription>
                <Wrapper variant="end">
                      <Button variant="primary" size="large" onClick={() => this.handleClickBack()}>Voltar</Button>
                </Wrapper>
              </Wrapper>
            </>
          )}
      </>
    );
  }
}

export default PhonebookDetail