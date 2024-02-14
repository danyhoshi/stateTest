import { useState, useContext } from "react";
import { places } from "./dataImg.js";
import { getImageUrl } from "./utils.js";
import { ImageSizeContext } from "./Context.jsx";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  // changeImage(isLarge);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Usa imágenes grandes
        </label>
        <hr />
        <List />
      </ImageSizeContext.Provider>
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
