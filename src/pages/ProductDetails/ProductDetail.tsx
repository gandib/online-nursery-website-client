import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import productApi from "../../redux/features/products/productApi";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = productApi.useGetSingleProductQuery(id);

  console.log(data);
  return (
    <div>
      <h1 className="p-8 text-5xl text-[#111111] font-bold">Product Details</h1>
      <div className="mt-4 mb-12">
        <Card
          title={data?.data?.title}
          image={data?.data?.image}
          price={data?.data?.price}
          rating={data?.data?.rating}
          key={data?.data?._id}
          _id={data?.data?._id}
          category={data?.data?.category}
          description={data?.data?.description}
          quantity={0}
          isDeleted={false}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
