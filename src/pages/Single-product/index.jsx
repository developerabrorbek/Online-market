import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../../components/Cards";
import basket from "../../assets/trash.svg";
import down from "../../assets/down.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { useGetSingleProductQuery } from "../../redux/API";
import Error from "../Error";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  function addtoBasketHandler(product) {
    dispatch(addProduct(product));
  }

  const { id } = useParams();
  const [width, setWidth] = useState(window.innerWidth);
  const { data: product, isLoading, isError } = useGetSingleProductQuery(id);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  let content;
  if (width < 640) {
    content = (
      <div className="mobile-footer flex justify-between items-center mt-6 mx-3 mb-3">
        <div className="basket bg-[#101010] w-[65px] h-[60px] rounded-[15px] px-5 flex items-center justify-center">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.08637 6.04598L0.486328 2.50532L2.05712 0.959961L5.65605 4.50172H22.5762C22.7492 4.50171 22.9198 4.54149 23.0744 4.61789C23.2291 4.69428 23.3634 4.80518 23.4667 4.94173C23.57 5.07828 23.6395 5.2367 23.6695 5.40435C23.6995 5.57199 23.6893 5.74422 23.6396 5.90729L20.9754 14.6443C20.9069 14.8693 20.7664 15.0667 20.5748 15.2069C20.3832 15.3472 20.1507 15.423 19.9119 15.423H6.30657V17.6072H18.5176V19.7915H5.19647C4.90205 19.7915 4.6197 19.6764 4.41151 19.4716C4.20333 19.2668 4.08637 18.989 4.08637 18.6993V6.04598ZM6.30657 6.68597V13.2387H19.086L21.0842 6.68597H6.30657ZM5.75152 24.16C5.3099 24.16 4.88636 23.9874 4.57408 23.6801C4.26181 23.3729 4.08637 22.9562 4.08637 22.5218C4.08637 22.0873 4.26181 21.6706 4.57408 21.3634C4.88636 21.0562 5.3099 20.8836 5.75152 20.8836C6.19314 20.8836 6.61668 21.0562 6.92896 21.3634C7.24123 21.6706 7.41667 22.0873 7.41667 22.5218C7.41667 22.9562 7.24123 23.3729 6.92896 23.6801C6.61668 23.9874 6.19314 24.16 5.75152 24.16ZM19.0727 24.16C18.6311 24.16 18.2075 23.9874 17.8953 23.6801C17.583 23.3729 17.4075 22.9562 17.4075 22.5218C17.4075 22.0873 17.583 21.6706 17.8953 21.3634C18.2075 21.0562 18.6311 20.8836 19.0727 20.8836C19.5143 20.8836 19.9378 21.0562 20.2501 21.3634C20.5624 21.6706 20.7378 22.0873 20.7378 22.5218C20.7378 22.9562 20.5624 23.3729 20.2501 23.6801C19.9378 23.9874 19.5143 24.16 19.0727 24.16Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <Link
          to="/"
          className="mx-3  grow block py-[22px] text-center bg-[#101010] shadow  rounded-[15px] text-white font-semibold text-[17px] leading-5"
        >
          Go home
        </Link>
        <div className="call bg-[#43D854] rounded-[15px] w-[65px] h-[60px]  p-5 flex items-center justify-center">
          <Link to="/contacts">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.90578 24.8235L8.9954 25.4601C10.8329 26.5317 12.9228 27.0943 15.05 27.09C17.4313 27.09 19.7591 26.3838 21.7391 25.0609C23.719 23.7379 25.2622 21.8575 26.1735 19.6575C27.0848 17.4575 27.3232 15.0366 26.8587 12.7011C26.3941 10.3656 25.2474 8.22025 23.5636 6.53643C21.8797 4.85261 19.7344 3.70591 17.3989 3.24134C15.0634 2.77678 12.6425 3.01521 10.4425 3.92649C8.24248 4.83777 6.36209 6.38096 5.03912 8.36093C3.71615 10.3409 3.01002 12.6687 3.01002 15.05C3.01002 17.2112 3.5774 19.2836 4.64144 21.1061L5.27655 22.1957L4.29378 25.8092L7.90578 24.8235ZM0.00604013 30.1L2.0408 22.6231C0.700052 20.3248 -0.0043504 17.7108 2.02155e-05 15.05C2.02155e-05 6.73788 6.7379 0 15.05 0C23.3621 0 30.1 6.73788 30.1 15.05C30.1 23.3621 23.3621 30.1 15.05 30.1C12.3903 30.1043 9.77748 29.4004 7.47987 28.0607L0.00604013 30.1ZM9.61847 7.98853C9.82014 7.97348 10.0233 7.97348 10.225 7.98251C10.3063 7.98853 10.3875 7.99757 10.4688 8.0066C10.7081 8.03368 10.9715 8.17967 11.0603 8.38134C11.5087 9.39872 11.9452 10.4236 12.3666 11.4515C12.4599 11.6803 12.4042 11.9738 12.2266 12.2597C12.1045 12.4531 11.9724 12.64 11.8308 12.8196C11.6608 13.0378 11.295 13.4381 11.295 13.4381C11.295 13.4381 11.146 13.6157 11.2032 13.837C11.2243 13.9212 11.2935 14.0431 11.3567 14.1455L11.4455 14.2885C11.8308 14.9311 12.3485 15.5828 12.9806 16.1968C13.1612 16.3714 13.3373 16.5505 13.527 16.7175C14.2313 17.3391 15.0289 17.8463 15.8898 18.2225L15.8973 18.2255C16.0252 18.2812 16.09 18.3113 16.2766 18.3911C16.3699 18.4302 16.4662 18.4648 16.564 18.4904C16.6651 18.5162 16.7716 18.5113 16.8699 18.4765C16.9683 18.4417 17.054 18.3784 17.1164 18.2948C18.206 16.9749 18.3053 16.8891 18.3144 16.8891V16.8921C18.3901 16.8215 18.48 16.7679 18.5781 16.735C18.6762 16.702 18.7803 16.6904 18.8832 16.701C18.9735 16.707 19.0653 16.7235 19.1496 16.7612C19.9488 17.1269 21.2566 17.6973 21.2566 17.6973L22.1325 18.0901C22.28 18.1608 22.414 18.3279 22.4185 18.4889C22.4245 18.5897 22.4335 18.7523 22.3989 19.0503C22.3508 19.4401 22.2334 19.9081 22.116 20.1534C22.0356 20.3209 21.9289 20.4743 21.7999 20.608C21.6481 20.7674 21.4818 20.9125 21.3033 21.0414C21.2415 21.0878 21.1788 21.133 21.1152 21.1768C20.928 21.2956 20.7356 21.4061 20.5387 21.5079C20.1513 21.7138 19.7233 21.8319 19.2851 21.8541C19.0067 21.8691 18.7282 21.8902 18.4483 21.8752C18.4363 21.8752 17.5935 21.7442 17.5935 21.7442C15.4537 21.1814 13.4749 20.1271 11.8143 18.665C11.4741 18.3655 11.1596 18.0434 10.8375 17.7229C9.49807 16.3909 8.48671 14.9537 7.87267 13.5962C7.55838 12.9299 7.38861 12.2046 7.37452 11.4681C7.36831 10.5543 7.66701 9.6646 8.22334 8.93969C8.3332 8.79822 8.43704 8.65073 8.61614 8.48067C8.80727 8.30007 8.92767 8.20375 9.05861 8.13753C9.2327 8.05029 9.42261 7.9991 9.61696 7.98703L9.61847 7.98853Z"
                fill="#ffffff"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  } else content = <Footer />;

  return (
    <>
      <Header />
      <section className="single-product">
        <div className="container mx-auto px-3 max-w-[1110px]">
          <h2 className="font-semibold text-[17px] leading-[21px] text-[#838383] uppercase mb-4 ps-2">
            {product.category}
          </h2>

          <div className="product__inner grid gap-y-6 md:grid-cols-2 gap-x-4">
            <div className="product">
              <ProductCard product={product} />
            </div>
            <div className="description rounded-[15px] overflow-hidden">
              <div className="description-body rounded-[15px] relative bg-[#F9F9F9] z-20 shadow-xl  ">
                <div className="body flex justify-between rounded-[15px] bg-white shadow  px-6 py-6">
                  <h2 className="font-semibold text-[17px] leading-5">
                    Description
                  </h2>
                  <img src={down} alt="down icon" />
                </div>
                <p className="text  rounded-b-[15px] p-6">
                  {product.description}
                </p>
              </div>

              <div className="actions mt-6 flex flex-col gap-y-4">
                <Link
                  to="/ordering"
                  className="bg-[#101010] block shadow rounded-[10px] text-white text-center py-[13px] w-[255px]"
                >
                  Buy!
                </Link>
                <button
                  onClick={() => addtoBasketHandler(product)}
                  className="bg-[#101010] flex items-center justify-center gap-x-4 shadow rounded-[10px] text-white text-center py-[13px] w-[255px]"
                >
                  <img src={basket} alt="Basket" />
                  <p className="text text-white">Add to basket</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {content}
      </section>
    </>
  );
};

export default SingleProduct;
