import ProductListTable from "./productlist/ProducListTable";
import { createContext, useState } from "react";
import TitleOne from "./productlist/TitleOne";
import TitleTwo from "./productlist/TitleTwo";
import AddProduct from "./productlist/AddProduct";

export const ProducListContext = createContext();
function ProductList() {
  const [addProductPage, setAddProductPage] = useState(false);

  return (
    <ProducListContext.Provider value={{ addProductPage, setAddProductPage }}>
      {addProductPage ? (
        <>
          <TitleTwo />
          <AddProduct />
        </>
      ) : (
        <>
          <TitleOne />
          <ProductListTable />
        </>
      )}
    </ProducListContext.Provider>
  );
}
export default ProductList;
