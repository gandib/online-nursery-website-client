import CategorySection from "../../components/CategorySection";
import Gallery from "../../components/Gallery";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold my-6">Hero Section Dibo</h1>
      <Products />
      <CategorySection />
      <Gallery />
    </div>
  );
};

export default Home;
