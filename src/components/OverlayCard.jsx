import ThumbnailCard from "./ThumbnailCard";
import "./cards.css";
import imageList from "./imageOrganizer";
import { useParams } from "react-router-dom";

function findImage(id) {
  var found = null;
  imageList.forEach((image) => {
    if (id == image.id) {
      found = image;
    }
  });
  return found;
}

function OverlayCard() {
  const { id } = useParams();
  console.log(id);
  const image = findImage(id);
  console.log(image);
  return (
    <>
      <div className="overlay">
        <ThumbnailCard size="card-lg" image={image}></ThumbnailCard>
        <div className="card-info">
          <p className="card-sm-title">title</p>
          <p className="card-sm-title">username</p>
        </div>
      </div>
    </>
  );
}

export default OverlayCard;
