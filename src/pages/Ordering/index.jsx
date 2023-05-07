import { useSelector } from "react-redux";
import { OrderCard } from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import mapImage from "../../assets/map.png";
import visa from "../../assets/visa.svg";
import promo from "../../assets/promocode.svg";
import LocationImage from "../../assets/locaiton.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Map from "../../components/Map";

const Order = () => {
  const { basketArr, basketCartTotalAmount } = useSelector((res) => res.basket);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  let style = "";
  let bg = "";
  if (width >= 640) {
    style = "rounded-[30px] bg-white p-4";
    bg = "bg-[#EAEAEA]";
  } else {
    bg = "bg-white";
    style = "";
  }

  return (
    <>
      <Header />
      <section className={`ordering-section min-h-[60vh] ${bg}`}>
        <div className="container mx-auto px-3 max-w-[1110px]">
          <div className="ordering__inner py-6 grid sm:grid-cols-2 sm:gap-x-11">
            <div className="body sm:order-6 max-w-[444px]">
              <div className={`products mb-11 ${style}`}>
                <h2 className="font-semibold text-[17px] leading-5 mb-4">
                  Products
                </h2>
                <ul className="grid gap-y-3">
                  {basketArr.map((item) => {
                    return <OrderCard product={item} key={item.id} />;
                  })}
                </ul>
              </div>

              <div className={`price ${style}`}>
                <h2 className="font-semibold text-[17px] leading-5 mb-4">
                  Payment method
                </h2>
                <form action="#">
                  <label htmlFor="payment" className="flex gap-x-3">
                    <img src={visa} alt="visa" />
                    <select name="payment" id="payment">
                      <option value="0" hidden className="">
                        Account on kaspi.kz
                      </option>
                    </select>
                  </label>
                  <label
                    htmlFor="promo"
                    className="flex gap-x-3 items-center mt-3"
                  >
                    <img src={promo} alt="" />
                    <input
                      type="text"
                      id="promo"
                      placeholder="Do you have promocode?"
                    />
                  </label>
                </form>
                <div className="tatal-price flex justify-between mt-3">
                    <h4 className="font-semibold text-[17px] leading-5">Total price</h4>
                    <p className="font-semibold text-[17px] leading-5">{basketCartTotalAmount + 499}$</p>
                </div>
              </div>

              <div className={`tel my-6 ${style}`}>
                <h2 className="font-semibold text-[17px] leading-5 mb-4">
                  Recipient number
                </h2>
                <form action="#">
                  <input
                    type="number"
                    placeholder="+998 __ ___ __ __"
                    className="bg-[#D6D6D6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </form>
              </div>

              <Link
                to="/ordered"
                className="bg-[#101010] block shadow rounded-[10px] py-3"
              >
                <p className="text-white font-medium text-[15px] leading-5 text-center ">
                  Finish ordering
                </p>
              </Link>
            </div>

            <div className={`delivery sm:order-3 ${style}`}>
              <div className="contact-map max-w-[634px] p-4 bg-white shadow rounded-[30px]">
                <div className="text mb-5 flex items-center justify-between">
                  <h2 className="font-semibold text-[17px] leading-5 ">
                    Delivery cost
                  </h2>
                  <p className="text font-semibold text-[15px] leading-[18px]">
                    499 $
                  </p>
                </div>
                <img src={mapImage} alt="map-image" className="w-full" />
                {/* {<Map/>} */}
                <div className="contact-map__body flex items-center gap-x-3 mt-4">
                  <img src={LocationImage} alt="Location image" />
                  <div className="texts">
                    <h3 className="font-medium text-[15px] leading-[18px]">
                      Address delivery
                    </h3>
                  </div>
                </div>
              </div>

              <form action="#" className="grid gap-y-2 mt-2">
                <select
                  name="city"
                  id="city"
                  className="bg-[#D6D6D6] border select pe-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="0" hidden>
                    Choose you city
                  </option>
                  <option value="1">Tashkent</option>
                  <option value="2">Namangan</option>
                  <option value="3">Fergana</option>
                  <option value="4">Andijan</option>
                </select>
                <input
                  type="text"
                  placeholder="Street/District"
                  className="bg-[#D6D6D6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
                <div className="actions grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Home"
                    className="bg-[#D6D6D6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                  <input
                    type="text"
                    placeholder="Home"
                    className="bg-[#D6D6D6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                  <input
                    type="text"
                    placeholder="Floor"
                    className="bg-[#D6D6D6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                  <input
                    type="text"
                    placeholder="Flat"
                    className="bg-[#D6D6D6] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Order;
