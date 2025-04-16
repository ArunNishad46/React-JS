import { useState } from 'react'
import itemData from './itemList.json'

function App() {
  const [selectedItem, setSelectedItem] = useState([])

  const isAllSelected = selectedItem.length === itemData.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItem(itemData.map(item => item.id));
    } else {
      setSelectedItem([]);
    }
  };

  const handleItemChange = (id) => {
    if (selectedItem.includes(id)) {
      setSelectedItem(prev => prev.filter(itemId => itemId !== id));
    } else {
      setSelectedItem(prev => [...prev, id]);
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold'>Select Fruits</h2>
      <div>
        <label htmlFor='selectAll' className='cursor-pointer text-lg'>
          <input 
          type="checkbox" 
          checked={isAllSelected}
          onChange={handleSelectAll} id='selectAll' 
          className='cursor-pointer w-[20px] h-[20px]' />
          Select All
        </label>
      </div>
      {
        itemData.map(item => (
          <div key={item.id}>
            <label className='cursor-pointer text-lg'>
              <input 
              type="checkbox" 
              checked={selectedItem.includes(item.id)} 
              onChange={() => handleItemChange(item.id)} 
              className='cursor-pointer w-[18px] h-[18px]' />
              {item.title}
            </label>
          </div>
        ))
      }
    </div>
  )
}

export default App
