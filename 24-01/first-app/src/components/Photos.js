import React, { useContext, useEffect, useState } from "react";
import { getAllPhotos } from "../apis/apis";
import { AnupamaContext } from "../App";
import ChildComponent from "./ChildComponent";

const Photos = () => {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const anupamaContent = useContext(AnupamaContext);

  anupamaContent.favCharacter = "Anuj";


  useEffect(() => {
    getAllPhotos()
      .then((response) => {
        let foundPhotos = response.data;
        setPhotoList(foundPhotos);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
        anupamaContent.favCharacter = "Anuj";
      });
  }, []);

  if (isLoading) {
    return <h4>{anupamaContent.favCharacter}</h4>;
  }

  return (
    <div>
      {anupamaContent.favCharacter}
      {photoList.map((photo, index) => (
        <div key={index}>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
      <AnupamaContext.Consumer>
        {(context) => <ChildComponent context={context} />}
      </AnupamaContext.Consumer>
    </div>
  );
};

export default Photos;
