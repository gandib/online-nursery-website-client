import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (userInfo) => ({
        url: "/products/create-product",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProducts: builder.query({
      query: (query) => {
        console.log(
          `/products?limit=${query?.limit}&sort=${query?.sort}&category=${query?.category}`
        );

        const params = new URLSearchParams();
        if (query?.category) {
          params.append("category", query?.category);
        }
        return {
          url: `/products?limit=${query?.limit}&sort=${query?.sort}&searchTerm=${query?.searchTerm}`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
    }),
    getAllCategories: builder.query({
      query: () => {
        return {
          url: `/products/categories`,
          method: "GET",
        };
      },
    }),
    filterProducts: builder.query({
      query: (query) => {
        return {
          url: `/products?category=${query?.category}`,
          method: "GET",
        };
      },
    }),
  }),
});

export default productApi;
