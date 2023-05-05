import SiteLogo from "../../assets/logo.svg";
import BasketImage from "../../assets/trash.svg";
import MenuImage from "../../assets/burger.svg";

const Header = () => {
  return (
    <header>
      <nav className="nav flex justify-between items-center px-6 py-5">
        <a href="/" className="site-logo">
          <img src={SiteLogo} alt="site-logo" />
        </a>
        <div className="header-actions flex gap-x-12 items-center">
          <div className="basket-wrapper">
            <img src={BasketImage} alt="Basket" />
          </div>
          <div className="menu">
            <img src={MenuImage} alt="Burger image" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
