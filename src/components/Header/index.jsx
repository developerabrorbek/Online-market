import SiteLogo from "../../assets/logo.svg";
import BasketImage from "../../assets/trash.svg";
import MenuImage from "../../assets/burger.svg";
import LanguageIcon from "../../assets/language.svg";
import telImage from "../../assets/tel.svg";
import cancelImage from "../../assets/cancel.svg";
import serviceIcon from "../../assets/service.svg";
import FavoriteImage from "../../assets/favorite.svg";
import { useGetCategoriesQuery } from "../../redux/API.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const mobileNavbar = document.querySelector(".mobile-navbar");
const overlay = document.querySelector(".overlay");
const Header = () => {
  const navigate = useNavigate();
  function SelectChanger(e) {
    let value = e.target.value;
    if (value) navigate(`/products/${value}`);
  }

  const handleMenu = () => {
    mobileNavbar.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  };

  document.addEventListener("click", (evt) => {
      if (!mobileNavbar.classList.contains("hidden")) {
        if (
          evt.target.matches(".cancel-menu") ||
          evt.target.matches(".overlay")
        ) {
          mobileNavbar.classList.add("hidden");
          overlay.classList.add("hidden");
        }
      }
  });

  const { basketCartTotal } = useSelector((res) => res.basket);
  const { favoriteCartTotal } = useSelector((res) => res.favorite);
  const { data: categories } = useGetCategoriesQuery();

  return (
    <header className="lg:mb-5">
      <div className="overlay hidden fixed top-0 z-40 bg-[#ccccccd7] w-[100vw] h-[100%]"></div>
      <div className="container mx-auto px-6 max-w-[1110px]">
        <nav className="nav flex justify-between items-center  py-5">
          <a href="/" className="site-logo">
            <img src={SiteLogo} alt="site-logo" />
          </a>
          <form action="#" className="hidden md:block">
            <select
              onChange={(e) => SelectChanger(e)}
              name="category"
              id="categories"
              className="bg-gray-50 border select pe-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="0" hidden>
                Select products by category
              </option>
              {categories &&
                categories.map((category, index) => {
                  return <option key={index}>{category}</option>;
                })}
            </select>
          </form>
          <div className="header-actions flex gap-x-12 items-center">
            <Link
              to="/selected"
              className="favorites-wrapper relative hidden md:block"
            >
              <img src={FavoriteImage} alt="Favorites" />
              <div className=" absolute -top-3 -right-4 -z-10 bg-red-400 rounded-full flex items-center justify-center  w-6">
                <p className="text text-white">{favoriteCartTotal}</p>
              </div>
            </Link>
            <Link to="/basket" className="basket-wrapper relative">
              <img src={BasketImage} alt="Basket" />
              <div className="amount  absolute -top-3 -right-4 -z-10 bg-[#FFA542] rounded-full flex items-center justify-center  w-6">
                <p className="text text-white ">{basketCartTotal}</p>
              </div>
            </Link>
            <div className="menu md:hidden">
              <img
                src={MenuImage}
                alt="Burger image"
                onClick={() => handleMenu()}
              />
              <div className="mobile-navbar top-0 right-0 rounded-bl-[30px] bg-white p-5 pt-9 h-[100vh] hidden  fixed w-1/2 z-50 ">
                <img
                  src={cancelImage}
                  alt="cancel image"
                  className="cancel-menu w-5 absolute top-2 right-2 hover:opacity-75"
                />
                <div className="wrapper grid gap-y-5">
                  <form action="#" className="block">
                    <select
                      onChange={(e) => SelectChanger(e)}
                      name="category"
                      id="categories"
                      className="bg-gray-50 border select pe-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="0" hidden>
                        Select products by category
                      </option>
                      {categories &&
                        categories.map((category, index) => {
                          return <option key={index}>{category}</option>;
                        })}
                    </select>
                  </form>
                  <Link
                    to="/selected"
                    className="favorites-wrapper relative flex items-center gap-x-4"
                  >
                    <img src={FavoriteImage} alt="Favorites" />
                    <div className=" absolute -top-3 left-4 -z-10 bg-red-400 rounded-full flex items-center justify-center  w-6">
                      <p className="text text-white">{favoriteCartTotal}</p>
                    </div>
                    <p>Favorites</p>
                  </Link>

                  <Link
                    to="/service-requirements"
                    className="flex item-center gap-x-3"
                  >
                    <img src={serviceIcon} alt="tel icon" className="w-5" />
                    <p>Service-requirements</p>
                  </Link>

                  <Link to="/contacts" className="flex item-center gap-x-3">
                    <img src={telImage} alt="tel icon" className="w-5" />
                    <p>Contacts</p>
                  </Link>

                  <div className="languages flex gap-x-3 items-center md:items-start">
                    <img src={LanguageIcon} alt="Language icon" />
                    <ul className="languages-list flex gap-x-3">
                      <li className="language text-[15px] leading-6 text-[#101010] hover:text-[#FFA542]">
                        Kaz
                      </li>
                      <li className="language text-[15px] leading-6 text-[#101010] hover:text-[#FFA542]">
                        Uzb
                      </li>
                      <li className="language text-[15px] leading-6 text-[#101010] hover:text-[#FFA542]">
                        Rus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
