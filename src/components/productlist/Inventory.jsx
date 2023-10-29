import { useState } from 'react';
import './inventory.css';

function Inventory() {
  const [sku, setSku] = useState('')
  const [quantity, setQuantity] = useState('')
  return (
    <div className='inventory my-3'>
      <h2>Inventory</h2>
      <div className='d-flex'>
        <div className='flex-grow-1 me-3'>
          <p>SKU</p>
          <input
            type="text"
            name="sku"
            value={sku}
            placeholder='Type product SKU here. . .'
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className='flex-grow-1 '>
          <p>Quantity</p>
          <input
            type="text"
            name="quantity"
            value={quantity}
            placeholder='Type product quantity here. . .'
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
export default Inventory;