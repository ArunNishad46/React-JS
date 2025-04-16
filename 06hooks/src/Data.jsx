import React, {useState} from "react";
import datas from "./datas.json";

function Data() {
  const [nData, setnData] = useState(datas)

  const handleRemove = (itemId) => {
    setnData(nData.filter(item => item.id !== itemId))
  }
  const handleUpdate = (itemId) => {
    setnData(nData.map(items => {
      if(items.id === itemId){
        return{name:"New Name"}
      }else{
        return items;
      }
    }))
  }

  return (
    <>
      <ul>
        {nData.map(items => 
          <li key={items.id}>
            {items.name}
            <br/>
            <button onClick={() => handleUpdate(items.id)}>Update</button>
            <button onClick={() => handleRemove(items.id)}>Remove</button>
          </li>
        )}
      </ul>
      <button onClick={() => setnData([])}>Clear</button>
    </>
  )
}

export default Data