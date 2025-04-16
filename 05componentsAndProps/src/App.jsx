import React from 'react'
import MobileList from './MobileList'
import itemList from './mobilelist.json'

// const itemList = [
//   {
//     image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/2/-original-imagz6tzewyqpgtz.jpeg?q=70",
//     title: "vivo T3 5G (Crystal Flake, 128 GB)",
//     price: "100"
//   },
//   {
//     image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/t/6/-original-imah8ffzb6tjbzaf.jpeg?q=70",
//     title: "realme 14 Pro 5G (Suede Grey, 256 GB)",
//     price: "120"
//   },
//   {
//     image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70",
//     title: "Apple iPhone 16 (Black, 128 GB)",
//     price: "300"
//   }
// ]

function App() {

  return (
    <div className='flex'>
      {itemList.map((val) => {
        return <MobileList 
          image={val.image}
          title={val.title}
          price={val.price}
        />
      })}
    </div>
  )
}

export default App
