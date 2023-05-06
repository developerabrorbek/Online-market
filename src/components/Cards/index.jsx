import HeartIcon from "../../assets/favorite.svg";

export const ProductCard = ({ product }) => {
  return (
    <div className="card bg-white rounded-[30px] shadow-sm p-6">
      <div className="card-images relative flex justify-center mb-6">
        <img
          src={product.image}
          alt="Product image"
          className="h-[250px]"
        />
        <img
          src={HeartIcon}
          alt="Heart icon"
          className="absolute top-0 right-0 z-20"
        />
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
    <div className="card flex justify-center flex-col items-center bg-white rounded-[30px] shadow-sm p-6">
      <div className="card-images relative mb-4">
        <img
          src={product.image}
          alt="Product image"
          className=" h-[240px]"
        />
      </div>
      <div className="card-body flex justify-between items-center">
        <h4 className="card-title text-center h-[48px] overflow-hidden">
          {product.title}
        </h4>
      </div>
    </div>
  );
};
