import React, { useState, useRef, useEffect } from 'react';
import ShoppingList from './ShoppingList'


const LocalKey = 'itemApp.items'

function App() {
  const [items, setItems] = useState([])
  const itemNameRef = useRef()


useEffect(() => {
  const storedItems = JSON.parse(localStorage.getItem (LocalKey))
  if (storedItems) setItems(storedItems)
}, [])

useEffect(() => {
  localStorage.setItem(LocalKey, JSON.stringify (items))
}, [items])

  function toggle(id) {
    const newItems = [...items]
    const item = newItems.find(item => item.id === id)
    item.complete = !item.complete
    setItems(newItems)
  }


  function additem(e) {
    const { v4: uuidv4 } = require('uuid');
    const name = itemNameRef.current.value
    if (name === '') return
    setItems(prevItems => {
     return [...prevItems, { id: uuidv4(), name: name, complete: false}]
    })
    itemNameRef.current.value = null

  }

  function handleClearItems() {
    const newItems = items.filter(item => !item.complete)
    setItems(newItems)
  }

  return (
    <>
    <ShoppingList items ={items} toggle={toggle} />
    <input ref={itemNameRef} type="text" />
    <button onClick={additem}>Add Item To Shopping List</button>
    <button onClick={handleClearItems}>Remove Items From Shopping List</button>
    <div>{items.filter(item => !item.complete).length} Items on Shopping List</div>
    </>
  )
}

export default App;
