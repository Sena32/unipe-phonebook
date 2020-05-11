import React from 'react'
import { Card, CardContent } from '../cards'
import './phoneItem.css'

const ItemDescription = ({ description, children }) => (
    <Card variant="description">
        {children}
        <CardContent >
            <ul className="phoneItem">
                <li className=" " >{description}</li>
            </ul>
        </CardContent>
        
    </Card>

)


export default ItemDescription