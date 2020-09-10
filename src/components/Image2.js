import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import UnsplashImage from "./UnsplashImage";
export default function Image2() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (count = 10) => {
    const apiRoot = "https://api.unsplash.com/collections/139386/photos";

    const accessKey = process.env.ACCESS_KEY;

    await axios
      .get(`${apiRoot}/?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...images, ...res.data]);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="image2">
      {images.length !== 0 ? (
        <div className="photos">
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={
              <div>
                <img className="loading1" src="Rolling-1s-200px.svg" alt="" />
              </div>
            }
          >
            {images.map((image) => (
              <UnsplashImage url={image.urls.thumb} key={image.id} />
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <div>
          <img className="loading1" src="Rolling-1s-200px.svg" alt="" />
        </div>
      )}
    </div>
  );
}
