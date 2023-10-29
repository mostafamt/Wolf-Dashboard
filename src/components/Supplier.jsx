import { createContext, useState } from "react";
import TitleOne from "./supplier/TitleOne";
import TitleTwo from "./supplier/TitleTwo";
import LeftBox from "./supplier/LeftBox";
import RightBox from "./supplier/RightBox";
import ProductListTable from "./supplier/ProducListTable";
import AddSupplier from "./supplier/AddSupplier";


export const SupplierContext = createContext();
function Supplier() {
  const [detailsPage, setDetailsPage] = useState(false)
  const [addPage, setAddPage] = useState(false)
  const [customerId, setCustomerId] = useState()
  return (
    <div className="customer">
      <SupplierContext.Provider value={{ addPage, setAddPage, detailsPage, setDetailsPage, customerId, setCustomerId }}>
        {detailsPage && !addPage ?
          <>
            <TitleTwo />
            <div className="d-flex px-4 ">
              <LeftBox />
              <RightBox />
            </div>
          </>
          :
          !detailsPage && addPage ?
            <>
              <AddSupplier/>
            </>
            :
            <>
              <TitleOne />
              <ProductListTable />
            </>
        }
      </SupplierContext.Provider>
    </div>
  )
}
export default Supplier;