import { useSelector } from "react-redux";
import { ProductCard } from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Favorites = () => {
    const {favoriteArr} = useSelector(res => res.favorite)
    if(favoriteArr.length == 0)
     return <>
     <Header/>
     <section className="favorites min-h-[60vh] flex items-center justify-center">
      <h1 className="text-[42px] font-semibold text-[#838383]">This page is empty</h1></section>
      <Footer/></>
  return (<>
  <Header/>
    <section className="favorites min-h-[60vh]">
      <div className="container mx-auto px-6 max-w-[1110px]">
        <div className="favorites__inner grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 items-center gap-y-6 justify-center">
            {favoriteArr.map(item => <ProductCard product={item} key={item.id}/>)}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Favorites;
