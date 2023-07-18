import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Page2.css";
import data from "./mock-data.json"
import { nanoid } from "@reduxjs/toolkit";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";



export const Page2 = () => {

    const [items, setItems] = useState(data)  //This is used to get the mock data from the json file

    const [addFormData, setAddFormData] = useState({
        itemName: '',
        quantity: '',
        datePurchased: '',
        expiryDate: ''
    }) //This is used to store changes to the adder form

    const [editFormData, setEditFormData] = useState({
        itemName: '',
        quantity: '',
        datePurchased: '',
        expiryDate: ''

    })  //This holds the form data when we are editing a row


    const [editItemId, setEditItemId] = useState(null)    //Since I want to edit one row at a time, this is used to get the id of the selected row and will help toggke between editable row and read only row


    const handleAddFormChange=(event)=>{
        event.preventDefault()

        const fieldName = event.target.getAttribute('name') //This is used to get the name attriute of the input from the user, i.e item name, quantity, etc
        const fieldValue = event.target.value //This gets the value of the named attribute

        const newFormData = {...addFormData}  //This is used to get the existing form data so that it can be changed without mutating the state
        newFormData[fieldName] = fieldValue //Passing the value to the variable

        setAddFormData(newFormData) //Passes the new data to the fucntion for it to b updated

    } //This function is called when the user changes the value of any input

    const handleEditFormChange = (event)=>{
        event.preventDefault()

        const fieldName = event.target.getAttribute("name")   //This gets the attribute of the field form data will be entered into
        const fieldValue = event.target.value  //This gets the value from the input field

        const newFormData = {...editFormData}   // This is an object created for the new field value(s)
        newFormData[fieldName] = fieldValue

        setEditFormData(newFormData)
    }  //This function is used to update the editFormData state when any of the form values change


    const handleAddFormSubmit = (event) => {
        event.preventDefault()

        const newItem = {
            id: nanoid(),
           itemName: addFormData.itemName,
           quantity: addFormData.quantity,
           datePurchased: addFormData.datePurchased,
           expiryDate: addFormData.expiryDate
        } //This is used to get the new item from the addFormData and will be added as an object to the inventory

        const newItemsArray = [...items, newItem]   //This is an array of the new items in the inventory as well as those to be added to the inventory
        setItems(newItemsArray);
    } //This function is called when the form is submitted, i.e Add button is clicked

    const handleEditFormSubmit = (event) => {
        event.preventDefault()
    
        const editedItem = {
            id: editItemId,
            itemName: editFormData.itemName,
            quantity: editFormData.quantity,
            datePurchased: editFormData.datePurchased,
            expiryDate: editFormData.expiryDate
        }

        const newItemsArray = [...items]

        const index = items.findIndex((item)=>item.id === editItemId)

        newItemsArray[index] = editedItem

        setItems(newItemsArray)
        setEditItemId(null)
    }


    const handleEditClick = (event, item) => {
       event.preventDefault()
       setEditItemId(item.id) 

       const formValues = {
        itemName: item.itemName,
        quantity: item.quantity,
        datePurchased: item.datePurchased,
        expiryDate: item.expiryDate
       }

       setEditFormData(formValues)
    } //This event listener handles a function that is called when the edit button is clicked


    const handleCancelClick = () => {
       setEditItemId(null) 
    }

    const handleDeleteClick = (itemId) => {
        const newItemsArray = [...items]

        const index = items.findIndex((item)=>item.id === itemId)

        newItemsArray.splice(index, 1)

        setItems(newItemsArray)


    }

    return (
        <div className="page2">
            <h1>MyShop App</h1>
            <div className="d">
                <div className="side">
                    <ul>
                        <li>MyShop Inventory</li>
                        <li>
                            <Link>MyShop To-Do List</Link>
                        </li>
                        <li>
                            <Link>MyShop Budget Tracker</Link>
                        </li>
                    </ul>
                </div>
                <div className="table">
                    <div>
                        <h2>MyShop Inventory</h2>
                    </div>
                    <form onSubmit={handleEditFormSubmit}> 
                        <table>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Date Purchased</th>
                                <th>Expiry Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item)=>  (
                                <Fragment>
                                    {editItemId === item.id ? 
                                    (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />  )  :
                                    (<ReadOnlyRow item= {item} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>) }
                                </Fragment>
                            ) /* this renders a table row for each object in the map function. There's a toggle function that alternates between the editable and read only rows*/)}
                        </tbody>
                        </table>
                    </form>

                    <div className="adder">
                        <div className="adder-text"><h2>Add an item</h2></div>
                        <div className="adder-input">
                            <form onSubmit={handleAddFormSubmit}>
                                <input type="text" name="itemName" required= "required" placeholder="Item Name" onChange={handleAddFormChange}></input>
                                <input type="text" name="quantity" required= "required" placeholder="Quantity" onChange={handleAddFormChange}></input>
                                <input type="text" name="datePurchased" required= "required" placeholder="Date Purchased" onChange={handleAddFormChange}></input>
                                <input type="text" name="expiryDate" required= "required" placeholder="Expiry Date" onChange={handleAddFormChange}></input> 
                                <button type="submit">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        
    );
};
