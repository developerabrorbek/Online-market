import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addFavoriteProduct,
  increaseExtraProduct,
  decreaseExtraProduct,
  removeFavoriteProduct,
  removeProduct,
} from "../../redux/slice";
import DeleteIcon from "../../assets/delete.svg";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function toSingleProduct(id, e) {
    if (!e.target.matches(".heart") && !e.target.matches(".trash")) {
      navigate(`/single-product/${id}`);
    }
  }
  const { pathname } = useLocation();
  let content;
  if (pathname != "/selected") {
    content = (
      <svg
        className="heart"
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
    );
  } else
    content = (
      <svg
        className="trash"
        width="21"
        height="17"
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8843 3.4H20.8663V5.1H18.8735V16.15C18.8735 16.3754 18.7685 16.5916 18.5816 16.751C18.3948 16.9104 18.1413 17 17.8771 17H3.92764C3.66338 17 3.40995 16.9104 3.22309 16.751C3.03623 16.5916 2.93125 16.3754 2.93125 16.15V5.1H0.938477V3.4H5.92042V0.85C5.92042 0.624566 6.0254 0.408365 6.21226 0.248959C6.39912 0.0895533 6.65255 0 6.91681 0H14.8879C15.1522 0 15.4056 0.0895533 15.5925 0.248959C15.7793 0.408365 15.8843 0.624566 15.8843 0.85V3.4ZM16.8807 5.1H4.92403V15.3H16.8807V5.1ZM12.3113 10.2L14.0729 11.7028L12.664 12.9047L10.9024 11.4019L9.14075 12.9047L7.73186 11.7028L9.49347 10.2L7.73186 8.6972L9.14075 7.4953L10.9024 8.9981L12.664 7.4953L14.0729 8.6972L12.3113 10.2ZM7.9132 1.7V3.4H13.8915V1.7H7.9132Z"
          fill="#DF6464"
        />
      </svg>
    );

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
      onClick={(e) => {
        if (e.target.matches(".trash") || e.target.matches(".favorite")) {
          dispatch(removeFavoriteProduct(product))
        } else toSingleProduct(product.id, e);
      }}
      className="card block bg-white rounded-[30px] shadow-sm p-6 cursor-pointer"
    >
      <div className="card-images relative flex justify-center mb-6">
        <img src={product.image} alt="Product image" className="h-[250px]" />
        <div
          className="favorite absolute heart top-0 -right-2 z-20 hover:opacity-70 w-8 h-8"
          id={product.id}
          onClick={() => handleAddCart(product)}
        >
          {content}
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

export const BasketCard = ({ product }) => {
  const dispatch = useDispatch();
  function removeCartHandler(product) {
    dispatch(removeProduct(product));
  }

  return (
    <div className="basket-card max-w-[633px] relative flex flex-col  bg-white rounded-[30px] shadow-sm p-6">
      <img
        src={DeleteIcon}
        alt="delete"
        className="absolute top-4 right-4 cursor-pointer hover:opacity-70"
        onClick={() => removeCartHandler(product)}
      />
      <div className="card-body flex items-center gap-x-4 mb-5">
        <img src={product.image} alt="image" className="w-[70px] h-[76px]" />
        <div className="card-body__text">
          <h4 className="font-medium text-[15px] leading-6 text-[#1C1C27]">
            {product.title}
          </h4>
          <p className="font-semibold text-[15px] leading-6 text-[#1C1C27]">
            {product.price} $
          </p>
        </div>
      </div>

      <div className="card-actions flex justify-between items-center">
        <div className="count flex gap-x-4 items-center">
          <button
            onClick={() => dispatch(decreaseExtraProduct(product))}
            className="bg-[#FFCE7F] text-white text-[24px] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#f8bf63]"
          >
            -
          </button>
          <p>{product.productCount}</p>
          <button
            onClick={() => dispatch(increaseExtraProduct(product))}
            className="bg-[#FFCE7F] text-white text-[24px] rounded-full   w-8 h-8 flex items-center justify-center hover:bg-[#f8bf63]"
          >
            +
          </button>
        </div>

        <div className="total">
          <p className="font-semibold text-[15px]  leading-6 text-[#1C1C27]">
            {product.productCount * product.price} $
          </p>
        </div>
      </div>
    </div>
  );
};

export const OrderCard = ({ product }) => {
  return (
    <div className="card flex items-center justify-between">
      <div className="body flex items-center gap-x-3">
        <img src={product.image} alt="image" className="w-10 h-10" />
        <div className="text flex flex-col ">
          <h4 className="font-medium text-[13px] leading-4 max-w-[200px]">
            {product.productCount} x {product.title}
          </h4>
          <p className="price font-medium text-[13px] leading-4">
            {product.price} $
          </p>
        </div>
      </div>
      <p className="all-price font-medium text-[13px] leading-5">
        {product.price * product.productCount} $
      </p>
    </div>
  );
};
