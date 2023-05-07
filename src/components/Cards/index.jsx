import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addFavoriteProduct, removeFavoriteProduct } from "../../redux/slice";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function toSingleProduct(id, e) {
    if (!e.target.matches(".heart")) {
      navigate(`/single-product/${id}`);
    }
  }

  const { favoriteArr } = useSelector((res) => res.favorite);
  console.log(favoriteArr);
  function handleAddCart(product) {
    const element = document.getElementById(`${product.id}`);
    element.classList.toggle("text-red-500");
    if (element.matches(".text-red-500")) {
      dispatch(addFavoriteProduct(product));
    } else {
      dispatch(removeFavoriteProduct(product));
    }
  }
  return (
    <div
      onClick={(e) => toSingleProduct(product.id, e)}
      className="card block bg-white rounded-[30px] shadow-sm p-6 cursor-pointer"
    >
      <div className="card-images relative flex justify-center mb-6">
        <img src={product.image} alt="Product image" className="h-[250px]" />
        <div
          className="favorite absolute heart top-0 right-0 z-20"
          id={product.id}
          onClick={() => handleAddCart(product)}
        >
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4872 1.65429C14.0711 -0.627558 18.064 -0.551821 20.5533 1.90098C23.0414 4.35486 23.1272 8.2629 20.8129 10.812L11.485 20L2.1594 10.812C-0.154953 8.2629 -0.0680546 4.34837 2.419 1.90098C4.91045 -0.548575 8.89568 -0.630804 11.4872 1.65429ZM18.9957 3.42979C17.3457 1.80469 14.6838 1.73869 12.9568 3.26425L11.4883 4.56044L10.0188 3.26533C8.28629 1.73761 5.62984 1.80469 3.97547 3.43195C2.3365 5.04407 2.254 7.62455 3.76427 9.32971L11.4861 16.937L19.208 9.3308C20.7194 7.62455 20.6369 5.04732 18.9957 3.42979Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="card-body flex justify-between items-center">
        <h4 className="card-title max-w-[75%] h-[48px] overflow-hidden">
          {product.title}
        </h4>
        <p className="price">{product.price} $</p>
      </div>
    </div>
  );
};

export const SingleCard = ({ product }) => {
  return (
    <Link
      to={`single-product/${product.id}`}
      className="card flex justify-center flex-col items-center bg-white rounded-[30px] shadow-sm p-6"
    >
      <div className="card-images relative mb-4">
        <img src={product.image} alt="Product image" className=" h-[240px]" />
      </div>
      <div className="card-body flex justify-between items-center">
        <h4 className="card-title text-center h-[48px] overflow-hidden">
          {product.title}
        </h4>
      </div>
    </Link>
  );
};
