import React from 'react'
import Item from './Item'

export default function ShoppingList({ deleteItem, items, editItem }) {
    return (
        items.map(item => {
        return <Item key={item.id} item={item} deleteItem={deleteItem} editItem = {editItem} />
        })
    )
}
