import React from "react";


export default function UnsplashImage({ url, key }) {
  return (
    <>
      <img className="photo" key={key} src={url} alt="" />
    </>
  );
}
