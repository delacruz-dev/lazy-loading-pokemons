import React from 'react'
import './List.css'

const List = ({ children }) => (
    <ul className='List'>
        {children}
    </ul>
)

export default List