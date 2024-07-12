import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (data) => {
        return {
          url: `/orders/create-order`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export default orderApi;
