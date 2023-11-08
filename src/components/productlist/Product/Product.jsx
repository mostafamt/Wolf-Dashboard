import { BsEye, BsPencil, BsTrash, BsCheckLg } from "react-icons/bs";

const Product = (props) => {
  const { product, handleCheckOut } = props;

  const getCategory = () => {
    const { category, subCategory } = product;
    let category_name = `${category?.name} (${subCategory?.name})`;
    return category_name;
  };

  const getQuantity = () => {
    let sum = 0;
    if (product.quantity) {
      const values = Object.values(product.quantity);
      sum = values.reduce((acc, cur) => acc + cur, 0);
    }
    return sum;
  };

  const getDate = () => {
    let date = "";
    if (product.createdAt) {
      date = new Date(product.createdAt).toDateString();
    }
    return date;
  };

  const onDeleteProduct = async () => {
    props.handleShow(product._id);
  };

  return (
    <tr>
      <td>
        <div
          className="check"
          onClick={(e) => handleCheckOut(e.target, product.Id)}
        >
          <span>
            <BsCheckLg />
          </span>
        </div>
      </td>
      <td>
        <div className="d-flex product-desc">
          <img src={`${product.images?.[0]}`} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <span>{product.ColorNum}</span>
          </div>
        </div>
      </td>
      <td className="sku">{product.SKU}</td>
      <td className="category">{getCategory()} </td>
      <td className="stock">{getQuantity()}</td>
      <td className="price">{product?.price_after}</td>
      <td className="status">
        <p className="low">Low Stock</p>
      </td>
      <td className="added">{getDate()}</td>
      <td className="actions">
        <button>
          <BsEye />
        </button>
        <button>
          <BsPencil />
        </button>
        <button onClick={onDeleteProduct}>
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};

export default Product;
