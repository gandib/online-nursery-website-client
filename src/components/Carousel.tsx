import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/flowers-production-cultivation-many-chrysanthemum-flowers-greenhouse-chrysanthemum-plantation_158595-6963.jpg?t=st=1720765034~exp=1720768634~hmac=23c3b06d1709ef24351e7d2071b924e055cca22b1796818b271152d644cf9cdf&w=996"
          className="w-full h-[500px]"
        />
        <p className="absolute mt-[200px] mx-[35%] text-xl md:text-4xl text-[#d5e5f5] font-bold">
          One of the leading Online Suppliers!
        </p>
        <button
          onClick={() => navigate("/products")}
          className=" btn absolute mt-[400px] mx-[35%] sm:text-2xl bg-[#0080ff] font-bold text-white hover:text-[#111111] "
        >
          SHOP NOW
        </button>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/gardening_23-2148020427.jpg?t=st=1720765409~exp=1720769009~hmac=9136b0416cd8c435c39084a9bfd13e727bc6829f1394a8d03ab2547e4ec85f7c&w=996"
          className="w-full h-[500px]"
        />
        <p className="absolute mt-[200px] mx-[35%] text-xl md:text-4xl text-[#0080ff] font-bold">
          Save Up To 50%!
        </p>
        <button
          onClick={() => navigate("/products")}
          className=" btn absolute mt-[400px] mx-[35%] sm:text-2xl bg-[#0080ff] font-bold text-white hover:text-[#111111]"
        >
          SHOP NOW
        </button>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/06/73/55/1000_F_206735513_nQxjeGqHw8MiaB30Lrnv7dT6VM8CfY8I.jpg"
          className="w-full h-[500px]"
        />
        <p className="absolute mt-[200px] mx-[35%] text-xl md:text-4xl text-[#0b1493] font-bold">
          Amazing Offer On Going!
        </p>
        <button
          onClick={() => navigate("/products")}
          className=" btn absolute mt-[400px] mx-[35%] sm:text-2xl bg-[#0080ff] font-bold text-white hover:text-[#111111]"
        >
          SHOP NOW
        </button>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://as2.ftcdn.net/v2/jpg/00/70/83/11/1000_F_70831104_Vz9LdtwqLT1nttfTYWjHYYdPECQ2zmPK.jpg"
          className="w-full h-[500px]"
        />
        <p className="absolute mt-[200px] mx-[35%] text-xl md:text-4xl text-[#032a52] font-bold">
          Free shopping start now!
        </p>
        <button
          onClick={() => navigate("/products")}
          className=" btn absolute mt-[400px] mx-[35%] sm:text-2xl bg-[#0080ff] font-bold text-white hover:text-[#111111]"
        >
          SHOP NOW
        </button>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
