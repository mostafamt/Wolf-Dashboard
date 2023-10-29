import { createContext, useState } from "react";
import TitleOne from "./customers/TitleOne";
import ProductListTable from "./customers/ProducListTable";
import TitleTwo from "./customers/TitleTwo";
import LeftBox from "./customers/LeftBox";
import RightBox from "./customers/RightBox";


export const CustomerContext = createContext();
function Customer() {
  const [detailsPage, setDetailsPage] = useState(false)
  const [customerId, setCustomerId] = useState()
  return (
    <div className="customer">
      <CustomerContext.Provider value={{ detailsPage, setDetailsPage, customerId, setCustomerId }}>
        {detailsPage ?
          <>
            <TitleTwo/>
            <div className="d-flex px-4 ">
              <LeftBox/>
              <RightBox/>
            </div>
          </>
          :
          <>
            <TitleOne />
            <ProductListTable />
          </>
        }
      </CustomerContext.Provider>
    </div>
  )
}
export default Customer;