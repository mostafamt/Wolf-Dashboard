import { RiArrowUpSFill, RiCashFill } from 'react-icons/ri';
import { TbShoppingCartCopy } from 'react-icons/tb';
import SupplierTable from './SupplierTable';
import { BiPackage } from 'react-icons/bi';

function RightBox() {
  return (
    <div className="user-orders flex-grow-1">
      <div className="d-flex flex-column">
        <div className="static d-flex ">
          <div className="d-flex justify-content-between flex-grow-1 ">
            <div className="d-felx flex-column ">
              <h2>Total Orders</h2>
              <p>2,400</p>
              <div className="d-flex rate" >
                <span>1% <RiArrowUpSFill /></span>
                <span>+24 this month</span>
              </div>
            </div>
            <div className='icon icon-one'><TbShoppingCartCopy /></div>
          </div>
          <div className="d-flex justify-content-between flex-grow-1 ">
            <div className="d-felx flex-column ">
              <h2>Product</h2>
              <p>2,400</p>
              <div className="d-flex rate" >
                <span>1% <RiArrowUpSFill /></span>
                <span>+24 this month</span>
              </div>
            </div>
            <div className='icon icon-three'><BiPackage/></div>
          </div>
          <div className="d-flex justify-content-between flex-grow-1 ">
            <div className="d-felx flex-column ">
              <h2>Total Balance</h2>
              <p>2,400</p>
              <div className="d-flex rate" >
                <span>1% <RiArrowUpSFill /></span>
                <span>+24 this month</span>
              </div>
            </div>
            <div className='icon icon-two'><RiCashFill /></div>
          </div>
        </div>
        <div className='main'>
          <h1>Order History</h1>
          <SupplierTable />
        </div>
      </div>
    </div>
  )
}
export default RightBox