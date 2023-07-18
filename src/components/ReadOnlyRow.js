import React from 'react'

const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
      <td>{item.itemName}</td>
      <td>{item.quantity}</td>
      <td>{item.datePurchased}</td>
      <td>{item.expiryDate}</td>
      <td>
        <button type='button' onClick={(event)=>handleEditClick(event, item)}>Edit</button>
        <button type='button' onClick={()=>handleDeleteClick(item.id)}>Delete</button>
      </td>
    </tr>
    )
}

export default ReadOnlyRow