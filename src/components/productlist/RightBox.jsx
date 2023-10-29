import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function RightBox() {
  const [mainCategory, setMainCategory] = useState(false);
  const [mainCategorySelected, setMainCategorySelected] = useState('Select a category')
  const [subCategory, setSubCategory] = useState(false);
  const [subCategorySelected, setSubCategorySelected] = useState('Select sub category')
  const [status, setStatus] = useState(false);
  const [statusSelected, setStatusSelected] = useState('Draft')

  const handleMainCategory = (value) => {
    setMainCategory(false);
    setMainCategorySelected(value)
  }
  const handleSubCategory = (value) => {
    setSubCategory(false);
    setSubCategorySelected(value)
  }
  const handleStatus = (value) => {
    setStatus(false);
    setStatusSelected(value)
  }

  return (
    <div className="add-right">
      <div className="category">
        <h2>Category</h2>
        <div>
          <p>Main Category</p>
          <div className="drop d-flex justify-content-between" onClick={() => setMainCategory(!mainCategory)}>
            <p>{mainCategorySelected}</p>
            <span><BsChevronDown /></span>
            {mainCategory &&
              <ul>
                <li onClick={() => handleMainCategory('وصلنا حديثا')}>وصلنا حديثا </li>
                <li onClick={() => handleMainCategory('ملابس')}>ملابس</li>
                <li onClick={() => handleMainCategory('أحذية')}>أحذية</li>
                <li onClick={() => handleMainCategory('شنط')}>شنط</li>
                <li onClick={() => handleMainCategory('اكسسوارات')}>اكسسوارات</li>
                <li onClick={() => handleMainCategory('ركن الجمال')}>ركن الجمال</li>
              </ul>
            }
          </div>
        </div>
        <div>
          <p>Sub Category</p>
          <div className="drop d-flex justify-content-between" onClick={() => setSubCategory(!subCategory)}>
            <p>{subCategorySelected}</p>
            <span><BsChevronDown /></span>
            {subCategory &&
              <ul>
                <li onClick={() => handleSubCategory('رجال')}>رجال</li>
              </ul>
            }
          </div>
        </div>
      </div>
      <div className="status">
        <div className="stat d-flex justify-content-between">
          <h2>Status</h2>
          <span className={statusSelected == 'Published' ? 'pub' : statusSelected == 'Draft' ? 'draft' : statusSelected == 'Low Stock' ? 'low' : 'out'}>
            {statusSelected}
          </span>
        </div>
        <div>
          <p>Product Status</p>
          <div className="drop d-flex justify-content-between" onClick={() => setStatus(!status)}>
            <p>{statusSelected}</p>
            <span><BsChevronDown /></span>
            {status &&
              <ul>
                <li onClick={() => handleStatus('Draft')}>Draft</li>
                <li onClick={() => handleStatus('Published')}>Published</li>
                <li onClick={() => handleStatus('Low Stock')}>Low Stock</li>
                <li onClick={() => handleStatus('Out of Stock')}>Out of Stock</li>
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default RightBox;