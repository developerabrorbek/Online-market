import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { useGetProductsByCategoryQuery } from "../../redux/API";
import Error from "../Error";
const Products = () => {
  const {category} = useParams();
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsByCategoryQuery(category);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <>
      <Header />
      <section className="products">
        <div className="container mx-auto px-6 max-w-[1110px]">
          <div className="products__inner grid items-center gap-y-6 md:gap-x-6 justify-center md:grid-cols-2 lg:grid-cols-3">
            {products.map(product=>{
                return <ProductCard product={product} key={product.id}/>
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
