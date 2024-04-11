import axios from "axios";

export const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: { geo: "TR" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
});
