import React, { useEffect } from "react";
import LandingMain from "./pages/LandingPage/LandingMain";
import { getToken } from "./services/SpotifySer";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/authSlice";
import { useGetAllArtistsQuery } from "./store/api-spotify";
import { RootState } from "./store/store";
import { MainPage } from "./pages/MainPage/MainPage";

export default function App() {
  const dispatch = useDispatch();
  // const { token } = useSelector((state: RootState) => state.user);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (location.hash) {
      const token = getToken();
      dispatch(setToken(token));
      localStorage.setItem("token", token);
      location.hash = "";
    }
  }, [location.hash]);
  const { data } = useGetAllArtistsQuery({});
  console.log(data);

  return <>{token ? <MainPage /> : <LandingMain />}</>;
}
