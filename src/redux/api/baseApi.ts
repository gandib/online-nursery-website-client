import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://online-nursery-website-server.vercel.app/api",
  }),
  endpoints: () => ({}),
});
