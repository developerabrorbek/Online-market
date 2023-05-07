import SiteLogo from "../../assets/logo.svg";
import BasketImage from "../../assets/trash.svg";
import MenuImage from "../../assets/burger.svg";
import FavoriteImage from "../../assets/favorite.svg";
import { useGetCategoriesQuery } from "../../redux/API.jsx";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
const navigate = useNavigate()
  function SelectChanger(e) {
    let value = e.target.value;
    console.log(value);
    if (value) navigate(`/products/${value}`);
  }

  const { data: categories } = useGetCategoriesQuery();

  return (
    <header className="lg:mb-5">
      <div className="container mx-auto px-6 max-w-[1110px]">
        <nav className="nav flex justify-between items-center  py-5">
          <a href="/" className="site-logo">
            <img src={SiteLogo} alt="site-logo" />
          </a>
          <form action="#" className="hidden md:block">
            <select
            onChange={(e)=>SelectChanger(e)}
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
            <Link to="/selected" className="favorites-wrapper hidden md:block">
              <img src={FavoriteImage} alt="Favorites" />
            </Link>
            <Link to="/basket" className="basket-wrapper">
              <img src={BasketImage} alt="Basket" />
            </Link>
            <div className="menu md:hidden">
              <img src={MenuImage} alt="Burger image" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
