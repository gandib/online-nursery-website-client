import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: `/products/categories`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export default categoryApi;
