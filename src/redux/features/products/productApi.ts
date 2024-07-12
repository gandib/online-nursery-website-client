import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/products/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"],
    }),

    getAllProducts: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query?.category) {
          params.append("category", query?.category);
        }
        if (query?.limit) {
          params.append("limit", query?.limit);
        }
        if (query?.sort) {
          params.append("sort", query?.sort);
        }
        if (query?.searchTerm) {
          params.append("searchTerm", query?.searchTerm);
        }

        return {
          // url: `/products?limit=${query?.limit}&sort=${query?.sort}&searchTerm=${query?.searchTerm}`,
          url: `/products`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: (productInfo) => ({
        url: `/products/${productInfo?._id}`,
        method: "PATCH",
        body: productInfo?.info,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export default productApi;
