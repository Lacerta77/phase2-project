import React from 'react'
import Item from './Item'

export default function ShoppingList({ items, toggle }) {
    return (
        items.map(item => {
        return <Item key={item.id} toggle={toggle} item={item} />
        })
    )
}
