import { TProduct } from "../pages/Products/Products";

const Card = (product: TProduct) => {
  const { title, image, price, rating } = product.product;

  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure>
        <img src={image} className="mx-4 border rounded-md" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Price: {price}</h2>

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
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn text-xl font-bold bg-[#0080ff] text-white hover:text-[#111111]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
