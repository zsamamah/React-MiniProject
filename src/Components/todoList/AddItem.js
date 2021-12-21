import React,{createContext, useState} from 'react';
import './css/additem.css'
import Items from './Items';

export const UserItems = createContext()

function AddItem() {
    const [item, setItem] = useState(null)
    const [myItems, setMyItems] = useState(JSON.parse(localStorage.getItem('items')))

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.add_item.value=""
        if(!localStorage.getItem('items')){
            let items = [item]
            localStorage.setItem('items',JSON.stringify(items))
            setItem(null)
            setMyItems(items)
        }
        else{
            let stored_items = JSON.parse(localStorage.getItem('items'))
            stored_items.push(item)
            localStorage.setItem('items',JSON.stringify(stored_items))
            setItem(null)
            setMyItems(stored_items);
        }
    }

    const resetTracker = ()=>{
        localStorage.removeItem('items')
        setMyItems(null)
      }
    
    return (
        <div id="todo_container">
            <form id="todoForm" onSubmit={handleSubmit}>
                <div><label htmlFor='add_item'>Enter Item :</label></div>
                <div><input type="text" id="add_item" onChange={(e)=>setItem(e.target.value)} required/></div>
                <div><button id="new_todo" type='submit'>Add Item !</button></div>
            </form>

            <UserItems.Provider value={{myItems,setMyItems}}>
                <Items/>
            </UserItems.Provider>

            {
                myItems!==null&&(<button id="resetTracker" onClick={resetTracker}>Reset Tracker</button>)
            }

            {/* <Items items={myItems}/> */}
        </div>
    )
}

export default AddItem
