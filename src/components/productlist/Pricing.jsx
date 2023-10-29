import { useState } from 'react';
import './pricing.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function Pricing() {
  const [basePrice, setBasePrice] = useState('');
  const [discountType, setDiscountType] = useState('Select a discount type');
  const [discountPrecentage, setDiscounPrecentag] = useState('')
  const [taxClass, setTaxClass] = useState('Select a tax class');
  const [vatAmount, setVatAmount] = useState('')
  const [showDiscountType, setShowDiscountType] = useState(false);
  const [showTexCalss, setShowTaxClass] = useState(false);


  const handleDiscountType = (value) => {
    setDiscountType(value);
    setShowDiscountType(false)
  }
  const handleTaxClass = (value) => {
    setTaxClass(value);
    setShowTaxClass(false)
  }

  return (
    <div className='pricing my-3'>
      <h2>Pricing</h2>
      <div>
        <p>Base Price</p>
        <input
          type="text"
          name="basePrice"
          value={basePrice}
          placeholder='Type base price here. . .'
          onChange={(e) => setBasePrice(e.target.value)}
        />
      </div>
      <div className='d-flex align-items-end'>
        <div className='d-flex flex-column flex-grow-1 '>
          <p>Discount Type</p>
          <div className='dis-type half px-3 d-flex align-items-center justify-content-between me-3' onClick={() => setShowDiscountType(!showDiscountType)}>
            <p className='m-0'>{discountType}</p>
            <div className='fs-4 mt-0'><MdOutlineKeyboardArrowDown /></div>
            {showDiscountType &&
              <ul>
                <li onClick={() => handleDiscountType('value')}>bala bla</li>
                <li onClick={() => handleDiscountType('value')}>bala bla</li>
                <li onClick={() => handleDiscountType('value')}>bala bla</li>
              </ul>}
          </div>
        </div>
        <div className='flex-grow-1 m-0'>
          <p>Discount Precentage (%)</p>
          <input
            type="text"
            name="basePrice"
            value={discountPrecentage}
            placeholder='Type discount precentage. . .'
            onChange={(e) => setDiscounPrecentag(e.target.value)}
          />
        </div>
      </div>
      <div className='d-flex align-items-end'>
        <div className='d-flex flex-column flex-grow-1 '>
          <p>Tax Class</p>
          <div className='dis-type half px-3 d-flex align-items-center justify-content-between me-3' onClick={() => setShowTaxClass(!showTexCalss)}>
            <p className='m-0'>{taxClass}</p>
            <div className='fs-4 mt-0'><MdOutlineKeyboardArrowDown /></div>
            {showTexCalss &&
              <ul>
                <li onClick={() => handleTaxClass('value')}>bala bla</li>
                <li onClick={() => handleTaxClass('value')}>bala bla</li>
                <li onClick={() => handleTaxClass('value')}>bala bla</li>
              </ul>}
          </div>
        </div>
        <div className='flex-grow-1 m-0'>
          <p>VAT Amount (%)</p>
          <input
            type="text"
            name="basePrice"
            value={vatAmount}
            placeholder='Type VAT amount. . .'
            onChange={(e) => setVatAmount(e.target.value)}
          />
        </div>
      </div>


    </div>
  )
}
export default Pricing;

{/* <div>
          <p>Product Brand</p>
          <input
            type="text"
            name="productName"
            value={productName}
            placeholder=". . . Type product brand here"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div> */}