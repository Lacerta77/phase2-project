import React, { useState, useRef, useEffect } from 'react';
import ShoppingList from './ShoppingList';
import './App.css';


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
    <h1>The Ultimate Shopping List</h1>
    <h2>Add and Remove Items and Never Forget A Grocery Item Again.</h2>
    <input ref={itemNameRef} type="text" />
    <button onClick={additem}>Add Item To Shopping List</button>
    <button onClick={handleClearItems}>Remove Selected Items From Shopping List</button>
    <ShoppingList items ={items} toggle={toggle} />
    <div>{items.filter(item => !item.complete).length} Item(s) on Shopping List</div>
    <a href="https://www.taste.com.au/quick-easy/galleries/top-100-easy-dinner-recipes/biccuul7?page=2" target="_blank" rel="noreferrer" class="nav-link">Click Here For Recipe Ideas!</a>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
    <div>Donate to the Production of This App.</div>
    <input type="hidden" name="business" value="NEDD2CEQV4EPN" />
    <input type="hidden" name="amount" value="1" />
    <input type="hidden" name="currency_code" value="USD" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
    </>
  )
}

export default App;
