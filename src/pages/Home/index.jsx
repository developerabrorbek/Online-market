import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Loading from "../../components/Loading";
import { useGetProductsQuery } from "../../redux/API";

const getAllProducts = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    content = products.map((product) => {
      return (
        <div className="card" key={product.id}>
          <img src={product.image} alt="Image" />
          <h4>{product.title}</h4>
          <p className="text">{product.description}</p>
        </div>
      );
    });
  } else if (isError) {
    content = (
      <div className="error bg-red-500">
        <p>{error.originalStatus}</p>
      </div>
    );
  }

  return content;
};

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ul className="card grid">{getAllProducts()}</ul>
    </div>
  );
};

export default Home;
