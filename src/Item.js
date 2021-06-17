import React, { useState } from 'react';

export default function Item({ item, deleteItem, editItem }) {
    const [editingMode, seteditingMode] = useState(false)
    const [price, setprice] = useState(item.price)

    function renderForm()   {
        return(
            <form onSubmit = {handleSubmit}>
                <span onClick = {toggleEdit}>{item.productName} New Price:</span>
                <label>
                    <input value = {price} name = "price" onChange = {handleInput} />
                </label>
                <button>Save Changes</button>
            </form>
        )
    }

    function toggleEdit()   {
        seteditingMode(!editingMode)
    }

    function handleInput(e)  {
        const convertednumber = e.target.value !==""? parseInt(e.target.value, 10): e.target.value
        setprice(convertednumber)

    }

    function handleDelete() {
        deleteItem(item.id)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {...item, price: price}
        editItem(formData, item.id)
        seteditingMode(false)
      }

    return (
        <div>
            {editingMode 
                ? renderForm()
                :<p onClick = {toggleEdit} >{`${item.productName} $${item.price}`}</p>
            }
            <button onClick = {handleDelete}> Delete </button>
        </div>
    )
}
