import React from 'react'
import { Card } from '../cards'
import './phoneItem.css'

const ItemPagination = ({ children }) => (
    <Card variant="description">
        
            <ul className="content-pagination">
                {children}
            </ul>
    </Card>

)


export default ItemPagination