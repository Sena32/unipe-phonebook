import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent } from '../cards'
import './phoneItem.css'

/* const Phone = ({ type }) => {
  if(type === 'Residencial') return <FontAwesomeIcon icon={faPhone} />
  else return <FontAwesomeIcon icon={faMobileAlt} />
} */

const PhoneItem = ({ name, number, email, phoneType, children }) => {
  const phone = phoneType === 'Residencial' ?
    <FontAwesomeIcon icon={faPhone} /> :
    <FontAwesomeIcon icon={faMobileAlt} />

  return (
    <div className="phoneContainer">
      <Card>
        <CardContent>
          <ul className="phoneItem">
            <li><FontAwesomeIcon icon={faUser} /> {name} </li>
            <li>{phone} {number}</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> {email}</li>
          </ul>
        </CardContent>
        {children}
      </Card>
    </div>
  )
}
export default PhoneItem