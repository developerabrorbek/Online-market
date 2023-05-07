import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Ordered = () => {
  return (
    <>
      <Header />
      <section className="ordered-section min-h-[60vh] mt-6">
        <div className="container mx-auto px-3 max-w-[1110px] flex justify-center">
          <ul className="lg:w-[730px]">
            <li className="rounded-[30px] bg-white py-6 px-8 grid gap-y-6">
              <p className="font-semibold text-[17px] text-center leading-6 text-[#1C1C27]">Заказ размещен. Номер вашего заказа №123123.</p>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Ordered;
