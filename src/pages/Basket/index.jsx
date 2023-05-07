import { useSelector } from "react-redux";
import { BasketCard } from "../../components/Cards";
import BasketFreeImage from "../../assets/free-basket.png";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Basket = () => {
  const { basketArr } = useSelector((res) => res.basket);
  if (!basketArr.length)
    return (
      <>
      <Header/>
        <div className="basket flex flex-col items-center justify-center h-[60vh] gap-y-6">
          <img src={BasketFreeImage} alt="Basket image" />
          <h2 className="font-semibold text-[18px] leading-6 text-[#1C1C27]">Your basket is free!!!</h2>
          <Link to="/" className="bg-[#101010] w-60 shadow rounded-[15px] flex items-center justify-center py-3 font-semibold text-[15px] leading-6 text-white">Go home</Link>
        </div>
        <Footer/>
      </>
    );

  return (
    <>
    <Header/>
      <section className="basket-section min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="basket-section__inner">
            <ul className="products grid gap-y-4">
              {basketArr.map((item) => (
                <BasketCard product={item} key={item.id} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Basket;
