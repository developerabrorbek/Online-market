import { useSelector } from "react-redux";
import { BasketCard } from "../../components/Cards";
import BasketFreeImage from "../../assets/free-basket.png";
import mapImage from "../../assets/map.png";
import LocationImage from "../../assets/locaiton.svg";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Basket = () => {
  const { basketArr, basketCartTotalAmount } = useSelector((res) => res.basket);
  if (!basketArr.length)
    return (
      <>
      <Header/>
        <div className="basket flex flex-col items-center justify-center min-h-[60vh] gap-y-6">
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
        <div className="container mx-auto px-6 max-w-[1110px]">
          <div className="basket-section__inner  grid gap-y-6 justify-center gap-x-6 md:grid-cols-2">
            <div className="basket-main grid gap-y-6 ">
            <ul className="products grid gap-y-4">
              {basketArr.map((item) => (
                <BasketCard product={item} key={item.id} />
              ))}
            </ul>
            <div className="contact-map max-w-[634px] p-4 bg-white shadow rounded-[30px]">
              <div className="text mb-5 flex items-center justify-between">
              <h2 className="font-semibold text-[17px] leading-5 ">
                Delivery cost
              </h2>
              <p className="text font-semibold text-[15px] leading-[18px]">499 $</p>
              </div>
              <img src={mapImage} alt="map-image" className="w-full" />
              <div className="contact-map__body flex items-center gap-x-3 mt-4">
                <img src={LocationImage} alt="Location image" />
                <div className="texts">
                  <h3 className="font-medium text-[15px] leading-[18px]">
                    Аксай-3а, 62ф, Алматы, Казахстан
                  </h3>
                  <p className="font-medium text-[13px] leading-4 text-[#838383]">
                    3 этаж 35 кабинет
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="action max-w-[360px] bg-white pt-6 rounded-[30px] shadow-xl  h-fit">
              <div className="text flex justify-between ites-center px-5">
                <h2 className="font-semibold text-[15px] leading-[18px]">All price</h2>
                <p className="font-semibold text-[15px] leading-[18px]">{Math.round(basketCartTotalAmount) + 499} $</p>
              </div>
              <Link
                  to="/ordering"
                  className="bg-[#101010] block shadow rounded-[30px] shadow-2xl text-white text-center py-[13px] mt-6"
                >
                  Buy now!
                </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Basket;
