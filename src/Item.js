import React from 'react'

export default function Item({ item, toggle }) {
    function handleItemClick()  {
        toggle(item.id)
    }
    return (
        <div>
            <label>

                <input type="checkbox" checked={item.complete} onChange={handleItemClick} />
                {item.name}
            </label>
        </div>
    )
}
