import { useSelector } from "react-redux";
import { ProductCard } from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Favorites = () => {
    const {favoriteArr} = useSelector(res => res.favorite)
  return (<>
  <Header/>
    <section className="favorites">
      <div className="container mx-auto px-6">
        <div className="favorites__inner grid items-center gap-y-6 justify-center">
            {favoriteArr.map(item => <ProductCard product={item} key={item.id}/>)}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Favorites;
