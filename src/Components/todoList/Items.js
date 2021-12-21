import React, { useContext,useState } from "react";
import { UserItems } from "./AddItem";

function Items(props) {
  const {myItems,setMyItems} = useContext(UserItems);

  const deleteItem = (index) => {
    let Items = myItems;
    Items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(Items));
    setMyItems(JSON.parse(localStorage.getItem('items')));
    if(myItems.length===0)
      setMyItems(null)
  };


  return (
    <>
      {myItems &&
        myItems.map((el, index) => {
          return (
            <div key={index} className="item_container">
              <div>
                <p>{el}</p>
              </div>
              <div className="item_options">
                <div>
                  <input type="checkbox"/>
                </div>
                <div>
                  <i className="fas fa-pencil"></i>
                </div>
                <div onClick={() => deleteItem(index)} className="red">
                  <i className="far fa-trash"></i>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Items;
