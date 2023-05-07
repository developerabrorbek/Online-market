import mapImage from "../../assets/map.png";
import LocationImage from "../../assets/locaiton.svg";
import Whatsup from "../../assets/whatsap.svg";
import Instagram from "../../assets/instagram.svg";
import Telegram from "../../assets/telegram.svg";
import WK from "../../assets/vk.svg";
import phone from "../../assets/tel-icon.svg";
import Header from "../../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
const Contacts = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  let content;
  if (width < 640) {
    content = (
      <Link
        to="/"
        className="mx-3 mt-6 mb-3 block py-[22px] text-center bg-[#101010] shadow rounded-2xl text-white font-semibold text-[17px] leading-5"
      >
        Go home
      </Link>
    );
  } else content = <Footer />;

  return (
    <>
      <Header />
      <section className="contact">
        <div className="container mx-auto px-3 max-w-[1110px]">
          <div className="contact__inner grid lg:grid-cols-2 lg:w-[920px] lg:mx-auto lg:gap-x-12 lg:px-12">
            <div className="contact-map max-w-[760px] p-4 bg-white shadow rounded-[30px]">
              <h2 className="font-semibold text-[17px] leading-5 mb-5">
                Our office
              </h2>
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
            <ul className="socials grid grid-cols-2 lg:grid-cols-1 lg:m-0 place-items-center lg:place-items-start justify-between  gap-y-4 mt-6">
              <li className="whatsup rounded-[30px]  bg-white p-12 lg:p-8 flex self-center justify-center  items-center">
                <a href="#">
                  <img
                    src={Whatsup}
                    alt="Whatsup"
                    className="w-[68px] lg:w-[40px]"
                  />
                </a>
              </li>
              <li className="instagram rounded-[30px] bg-white p-12 lg:p-8 flex justify-center   items-center">
                <a href="#">
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="w-[68px] lg:w-[40px]"
                  />
                </a>
              </li>
              <li className="telegram rounded-[30px] bg-white p-12 lg:p-8 flex justify-center   items-center">
                <a href="#">
                  <img
                    src={Telegram}
                    alt="Telegram"
                    className="w-[68px] lg:w-[40px]"
                  />
                </a>
              </li>
              <li className="wk  rounded-[30px] bg-white px-12 lg:p-8 py-14 lg:py-10 flex justify-center   items-center">
                <a href="#">
                  <img
                    src={WK}
                    alt="Wk image"
                    className="w-[68px] lg:w-[40px]"
                  />
                </a>
              </li>
            </ul>
            <div className="phone flex items-center justify-center lg:justify-start mt-8">
              <a
                href="tel:7 777 777 77 77"
                className="flex items-center gap-x-3"
              >
                <img src={phone} alt="phone-icon" />
                <p className="font-bold text-[20px] leading-6">
                  +7 777 777 77 77
                </p>
              </a>
            </div>
          </div>
        </div>
        {content}
      </section>
    </>
  );
};

export default Contacts;
