// d03159c5000e438c8b7d8bca7e5f201a
// https://accounts.spotify.com/authorize?client_id=d03159c5000e438c8b7d8bca7e5f201a&scope=
import queryString from "query-string";
import React from "react";

let client_id = "d03159c5000e438c8b7d8bca7e5f201a";
let redirect_uri = "http://localhost:5173/";
let authEndpoint = "https://accounts.spotify.com/authorize";
const SCOPE = [
  "streaming",
  "user-read-email",
  "user-modify-playback-state",
  "user-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
];
export const Redirect = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${SCOPE.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getToken = (): string => {
  const url_hash = location.hash.slice(1).split("&");
  const token = url_hash[0].split("=")[1];
  return token;
};
