import { useNavigate } from "react-router-dom";
import { TProduct } from "../pages/Products/Products";

const Card = ({
  title,
  image,
  price,
  rating,
  category,
  description,
  _id,
}: TProduct) => {
  //   const { title, image, price, rating } = product.product;
  const navigate = useNavigate();

  return (
    <div
      className={`card card-compact bg-base-100 w-full ${
        description ? "" : "shadow-xl"
      }`}
    >
      <figure>
        <img src={image} className="mx-4 border rounded-md" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Price: {price}</h2>
        {category ? <h2 className="card-title">Category: {category}</h2> : ""}

        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0080ff]"
            defaultChecked={rating === 1 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0080ff]"
            defaultChecked={rating === 2 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0080ff]"
            defaultChecked={rating === 3 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0080ff]"
            defaultChecked={rating === 4 ? true : false}
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0080ff]"
            defaultChecked={rating === 5 ? true : false}
          />
        </div>
        {description ? <p>{description}</p> : ""}
        <div className="card-actions justify-end">
          {description ? (
            ""
          ) : (
            <button
              onClick={() => navigate(`/product/${_id}`)}
              className="btn text-xl font-bold bg-[#9fc8f0] text-white hover:text-[#111111]"
            >
              See Details
            </button>
          )}
          <button
            onClick={() => navigate(`/cart/${_id}`)}
            className="btn text-xl font-bold bg-[#0080ff] text-white hover:text-[#111111]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
