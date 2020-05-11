import React from 'react'
import { Card, CardContent } from '../cards'
import './phoneItem.css'

const ItemDetail = ({ id, email, children }) => (
    <Card variant="detail">
        <CardContent >
            <ul className="phoneItem">
                <li className=" bold" >{id} </li>
                <li className=" underline" ><a href="#">{email}</a></li>
            </ul>
        </CardContent>
        {children}
    </Card>

)


export default ItemDetail