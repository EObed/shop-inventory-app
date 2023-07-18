import React from 'react'
import "./EditableRow.css"

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
            <input className="edit-input" type='text' required='required' placeholder='Item Name' name='itemName' onChange={handleEditFormChange} value={editFormData.itemName} ></input>
        </td>
        <td>
            <input className="edit-input" type='text' required='required' placeholder='Quantity' name='quantity' onChange={handleEditFormChange} value={editFormData.quantity} ></input>
        </td>
        <td>
            <input className="edit-input" type="text" name="datePurchased" required="required" placeholder="Date Purchased" onChange={handleEditFormChange} value={editFormData.datePurchased} ></input>
        </td>
        <td>
            <input className="edit-input" type="text" name="expiryDate" required="required" placeholder="Expiry Date" onChange={handleEditFormChange} value={editFormData.expiryData} ></input>
        </td>
        <td>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditableRow