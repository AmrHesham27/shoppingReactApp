import { useState, useEffect } from "react";

function useFetchImage(imgId, imgExt) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/images/${imgId}/${imgExt}`;
    fetch(url).then((response) => {
      response.blob().then((blob) => setImage(URL.createObjectURL(blob)));
    });
  }, [setImage, imgId, imgExt]);

  return image;
}

export default useFetchImage;
