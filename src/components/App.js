import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [itemName , setItemName] = useState("");
  let [itemPrice , setItemPrice] = useState("");
  let [list,setList] = useState(
    [
    {'ItemName' : "Item 1" , 'ItemPrice' : "$10",},
    {'ItemName' : "Item 2" , 'ItemPrice' : "$20",},
    {'ItemName' : "Item 3" , 'ItemPrice' : "$30",}
  ]
  )
  function handleItemName(e){
    setItemName(e.target.value)
  }
function handleItemPrice(e){
  setItemPrice(e.target.value)
}
function addItemsToList(){
  if(itemName && itemPrice){
    const newItem = {'ItemName': itemName, 'ItemPrice': `$${itemPrice}`};
    setList([...list,newItem]);
    setItemName("");
    setItemPrice("");
  }
}
function removeItem(index){
  const updatedList = list.filter((item, idx) => idx !== index);
  setList(updatedList);
}
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <label htmlFor="itemName">Item Name:<input type="text" value= {itemName} onChange={handleItemName} id="itemName"/>
      </label>
      <label htmlFor="itemPrice">Item Price:<input type="text" value= {itemPrice} onChange={handleItemPrice} id="itemPrice"/>
      </label>
       <button onClick={addItemsToList}>Add Items</button>
      <div className="child">
        <h2>Child Component</h2>
        <ul>
         {
          list.map((item,idx) => {
           return (
           <li key={idx}>{item.ItemName} - {item.ItemPrice} 
               <button onClick={() => removeItem(idx)}>
               Remove
              </button>
            </li>)
         })
         }
         </ul>
      </div>
    </div>
  )
}

export default App;