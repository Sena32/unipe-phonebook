import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent, CardAction } from '../cards'
import './phoneItem.css'

const Phone = ({ type }) => {
  if(type === 'Residencial') return <FontAwesomeIcon icon={faPhone} />
  else return <FontAwesomeIcon icon={faMobileAlt} />
}

const PhoneItem = ({ name, number, phoneType }) => {
  const phone = phoneType === 'Residencial' ?
    <FontAwesomeIcon icon={faPhone} /> :
    <FontAwesomeIcon icon={faMobileAlt} />

  return (
    <div className="phoneContainer">
      <Card>
        <CardContent>
          <ul className="phoneItem">
            <li><FontAwesomeIcon icon={faUser} /> {name} </li>
            <li>{phone} {number} <Phone type={phoneType}></Phone></li>
          </ul>
        </CardContent>
        <CardAction>
          <button className="btn btn-small">Apagar</button>
          <button className="btn btn-small">Detalhes</button>
        </CardAction>
      </Card>
    </div>
  )
}
export default PhoneItem