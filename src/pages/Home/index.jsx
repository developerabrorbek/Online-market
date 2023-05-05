import { ProductCard, SingleCard } from "../../components/Cards";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Loading from "../../components/Loading";
import { useGetProductsQuery } from "../../redux/API";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay} from "swiper";

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
  const { data: products } = useGetProductsQuery();
  return (
    <div>
      <Header />
      <Hero />
      <section className="all-products">
        <div className="container px-6">
          <h2 className="text-[24px] font-semibold leading-6 text-[#838383] mb-5">All products</h2>
            <Swiper
              className="cards grid items-center gap-4"
              modules={[Autoplay]}
              autoplay={{ delay: 2000 }}
              slidesPerView={1}
            >
              {products &&
                products.map((product) => {
                  return (
                    <SwiperSlide key={product.id} className="ms-8" >
                      <SingleCard product={product} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
