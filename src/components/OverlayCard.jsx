import "./cards.css";
import imageList from "./imageOrganizer";
import { useParams } from "react-router-dom";
import ExplorePage from "./ExplorePage";

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
  const image = findImage(id);
  return (
    <>
      <div className="main">
        <img src={image.src}></img>
        <div className="card-info">
          <p className="card-sm-title">title</p>
          <p className="card-sm-title">username</p>
        </div>
      </div>
      <h2>Discover More </h2>
      <ExplorePage />
    </>
  );
}

export default OverlayCard;
