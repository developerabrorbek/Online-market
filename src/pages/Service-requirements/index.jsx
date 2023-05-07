import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ServiceRequirements = () => {
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
      <section className="service-requirements">
        <div className="container mx-auto px-3 max-w-[1110px]">
          <div className="service__inner pb-2">
            <ul className="service-items grid gap-y-5 md:gap-y-7">
              <li className="service-item shadow rounded-[30px] bg-white px-4 py-5">
                <h3 className="font-semibold text-[17px] leading-5 mb-3 text-[#1C1C27]">
                  Service requirements
                </h3>
                <p className="service-item__text text-[17px] leading-6 ps-2">
                  fakeStoreApi can be used with any type of shopping project
                  that needs products, carts, and users in JSON format. you can
                  use examples below to check how fakeStoreApi works and feel
                  free to enjoy it in your awesome projects!
                </p>
              </li>
              <li className="service-item shadow rounded-[30px] bg-white px-4 py-5">
                <h3 className="font-semibold text-[17px] leading-5 mb-3 text-[#1C1C27]">
                  Service requirements
                </h3>
                <p className="service-item__text text-[17px] leading-6 ps-2">
                  fakeStoreApi can be used with any type of shopping project
                  that needs products, carts, and users in JSON format. you can
                  use examples below to check how fakeStoreApi works and feel
                  free to enjoy it in your awesome projects!
                </p>
              </li>
              <li className="service-item shadow rounded-[30px] bg-white px-4 py-5">
                <h3 className="font-semibold text-[17px] leading-5 mb-3 text-[#1C1C27]">
                  Service requirements
                </h3>
                <p className="service-item__text text-[17px] leading-6 ps-2">
                  fakeStoreApi can be used with any type of shopping project
                  that needs products, carts, and users in JSON format. you can
                  use examples below to check how fakeStoreApi works and feel
                  free to enjoy it in your awesome projects!
                </p>
              </li>
            </ul>
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceRequirements;
