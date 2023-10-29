import Image from '../../assets/image.png';
import { useState } from "react";
import Pricing from './Pricing';
import Inventory from './Inventory';
import Sizing from './Sizing';
import LinkProduct from './LinkProduct';
import { useRef } from 'react';
import Color from './Color';

function LeftBox() {
  const [productName, setProductName] = useState();
  const [productBrand, setProductBrand] = useState();
  const [productDescription, setProductDesription] = useState();
  const [images, setImages] = useState([]);
  const [imagesLength, setImagesLength] = useState(0);
  const fileInputRef = useRef();

  function selectFile() {
    fileInputRef.current.click();
  }

  function onFileSelected(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          }
        ])
        setImagesLength(1)
      }
    }
  }

  return (
    <div className="add-left flex-grow-1">
      <div className="general">
        <h2>General Information </h2>
        <div>
          <p>Product Name</p>
          <input
            type="text"
            name="productName"
            value={productBrand}
            placeholder=". . . Type product name here"
            onChange={(e) => setProductBrand(e.target.value)}
          />
        </div>
        <div>
          <p>Product Brand</p>
          <input
            type="text"
            name="productName"
            value={productName}
            placeholder=". . . Type product brand here"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <p>Description</p>
          <textarea rows={6}
            name="productName"
            value={productDescription}
            placeholder=". . . Type product name here"
            onChange={(e) => setProductDesription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="media">
        <h2>Media</h2>
        <div>
          <p>Photos</p>
          <div className="input-images">
            {imagesLength == 0 ?
              <div className="img"><img src={Image} /></div>
              : <div className='select-images'>
                {
                  images.map((image) => {
                    return (<>
                      <img src={image.url} width={80} height={100} className='mx-2' style={{ borderRadius: '8px' }} />
                    </>
                    )
                  }
                  )}
              </div>
            }
            <p>Drag and drop image here, or click add image</p>
            <input type='file' name='file' className='file d-none' multiple ref={fileInputRef} onChange={onFileSelected} />
            <button onClick={selectFile}>Add Image</button>
          </div>
        </div>
      </div>
      <Pricing />
      <Inventory />
      <Sizing />
      <Color/>
      <LinkProduct />
    </div>
  )
}
export default LeftBox;