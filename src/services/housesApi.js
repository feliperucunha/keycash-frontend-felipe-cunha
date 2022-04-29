import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_KEYCASH_KEY;

const createRequest = (url) => ({ url });

export const housesApi = createApi({
  reducerPath: "housesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: () => createRequest(``),
    }),
  }),
});

export const { useGetHousesQuery } = housesApi;
