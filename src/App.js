import React, { useState, useRef, useEffect } from 'react';
import ShoppingList from './ShoppingList';
import './App.css';
import AddItemForm from './AddItemForm';


const LocalKey = 'itemApp.items'

function App() {
  const [items, setItems] = useState([])
  
const BASE_URL = `https://ultimate-shopping-list.herokuapp.com/shoppingcart`


useEffect(() => {
fetch(`https://ultimate-shopping-list.herokuapp.com/shoppingcart`)
.then(r => r.json())
.then(setItems)
}, [])

  function addItem(formData)  {
    fetch(`https://ultimate-shopping-list.herokuapp.com/shoppingcart`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
          return setItems(prevItems => [...prevItems, data])
    })
  }

  function editItem(formData, id) {
    fetch(`https://ultimate-shopping-list.herokuapp.com/shoppingcart/${id}`, {
      method: `PATCH`,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      const updatedList = items.map(item => {
        return item.id === id ? data: item
      })
      setItems(updatedList)
    })
  }

  function deleteItem(id) {
    fetch(`https://ultimate-shopping-list.herokuapp.com/shoppingcart/${id}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(()=> {
      const updatedList = items.filter(item => {
        return item.id !== id
      })
      setItems(updatedList)
    })
  }

  return (
    <>
    <h1>The Ultimate Shopping List</h1>
    <h2>Add and Remove Items and Never Forget A Grocery Item Again.</h2>
    <AddItemForm addItem = {addItem}/>
    <ShoppingList deleteItem = {deleteItem} items ={items} editItem = {editItem}/>
    <a href="https://www.taste.com.au/quick-easy/galleries/top-100-easy-dinner-recipes/biccuul7?page=2" target="_blank" rel="noreferrer" className="nav-link">Click Here For Recipe Ideas!</a>
    </>
  )
}

export default App;
