import React, { useRef } from "react";
import ProfileSearch from "../Profile/search";
import HomeArticle from "../article/homeart";
import HomeProfile from "../Profile/HomeProfile";

export default function Home() {
  
  

  return (
    <>
      <h1 style={{textAlign: "center",fontSize: "32px",color: "#1d1717",marginTop: "20px",padding: "10px", }}>
        Learn Indian Art, Dance, and Cultural Activity from Verified Creators
      </h1>

      <ProfileSearch />
      <HomeProfile/>
      <HomeArticle/>
      </>
  );
}
