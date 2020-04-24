import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent, CardAction } from '../cards'
import './phoneItem.css'

const PhoneItem = ({ name, phone }) => (
  <div className="phoneContainer">
    <Card>
      <CardContent>
        <ul className="phoneItem">
          <li><FontAwesomeIcon icon={faMobileAlt} /> {name} </li>
          <li><FontAwesomeIcon icon={faUser} /> {phone}</li>
        </ul>
      </CardContent>
      <CardAction>
        <button className="btn btn-small">Apagar</button>
        <button className="btn btn-small">Detalhes</button>
      </CardAction>
    </Card>
  </div>
)

export default PhoneItem