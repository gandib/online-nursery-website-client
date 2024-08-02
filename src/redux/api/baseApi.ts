import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["product", "category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://online-nursery-website-server.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),
  endpoints: () => ({}),
});
