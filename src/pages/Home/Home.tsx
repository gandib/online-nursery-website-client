import Carousel from "../../components/Carousel";
import CategorySection from "../../components/CategorySection";
import Gallery from "../../components/Gallery";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Products />
      <CategorySection />
      <Gallery />
    </div>
  );
};

export default Home;
