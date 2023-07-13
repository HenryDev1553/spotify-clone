import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const spotifyAPI = createApi({
  reducerPath: "spotifyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllArtists: builder.query({
      query: () => `browse/featured-playlists`,
    }),
  }),
});

export const { useGetAllArtistsQuery } = spotifyAPI;
