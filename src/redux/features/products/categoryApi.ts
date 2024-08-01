import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: `/categories`,
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),

    getSingleCategory: builder.query({
      query: (id) => {
        return {
          url: `/categories/${id}`,
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),

    addCategory: builder.mutation({
      query: (data) => {
        return {
          url: `/categories/create-category`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation({
      query: (data) => {
        return {
          url: `/categories/${data._id}`,
          method: "PATCH",
          body: data.info,
        };
      },
      invalidatesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `/categories/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export default categoryApi;
