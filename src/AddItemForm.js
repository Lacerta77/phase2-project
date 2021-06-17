import React, { useState } from 'react';

function AddItemForm({addItem}) {
const [formData, setformData] = useState({ productName : ``, price : 0})
    function handleChange(e) {
        const key = e.target.name
        const value = key==="price"? parseInt(e.target.value, 10): e.target.value
        setformData({
            ...formData,
            [key] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addItem(formData)
        setformData({ productName : ``, price : 0})
      }

    return (
        <form onSubmit = {handleSubmit}>
        <label>
        Item
        <input name= "productName" type="text" value = {formData.productName} onChange = {handleChange}/>
        </label>
        <label>
        Price
        <input name= "price" type="number" value = {formData.price} onChange = {handleChange}/>
        </label>
        <button>Add Item To Shopping List</button>
        </form>
    )
}

export default AddItemForm
