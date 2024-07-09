import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="sm:container px-1 h-screen flex justify-center items-center">
      <div>
        <h1 className="text-red-500 text-3xl font-semibold">
          Opps! Not Found!
        </h1>
        <button className="btn mt-12">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;
