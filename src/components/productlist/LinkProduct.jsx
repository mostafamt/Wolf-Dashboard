import { useState } from 'react';
import './linkproduct.css';
import { BiLink } from 'react-icons/bi';
import Image from '../../assets/ImageSearc.png';


function LinkProduct() {
  const [showSearchList, setshowSearchList] = useState(false)
  const [showSearch, setshowSearch] = useState(false)
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState([])
  const [image, setImage] = useState()



  const handlesearch = (name, image) => {
    setSearch(name);
    setshowSearchList(false)
    setImage(image)
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    const results = list.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchList(results);
  };


  return (
    <>
      <div className='pro-link my-3'>
        <h2>Link Products</h2>
        {image != undefined &&
          <div className='mt-3'>
            <img src={image} width={101} height={138} />
          </div>
        }
        <div className='btns d-flex'>
          <button className='link' onClick={() => setshowSearch(true)}><BiLink /> Link From Products </button>
          {showSearch &&
            <div className='search flex-grow-1'>
              <input name='search' className='w-100' value={search} onChange={handleInputChange } onClick={() => setshowSearchList(true)} />
              {
                showSearchList &&
                <ul>
                  {searchList.map((item) => {
                    return (
                      <>
                        <li onClick={() => handlesearch(item.name, item.image)}>{item.name}</li>
                      </>
                    )
                  })}
                </ul>
              }
            </div>
          }
        </div>
      </div>
    </>
  )
}
export default LinkProduct;


export const list = [
  { id: 1, name: 'One', image: Image },
  { id: 2, name: 'two', image: Image },
]