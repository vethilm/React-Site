import "./cards.css";
import imageList from "./imageOrganizer";
import { useParams } from "react-router-dom";
import ExplorePage from "./ExplorePage";
import { useEffect } from "react";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div className="main">
        <img src={image.src}></img>
        <div className="card-info">
          <p className="card-title">title</p>
          <p className="card-username">username</p>
          <p className="card-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vehicula placerat nunc. Nunc consectetur, enim eu
            rhoncus dictum, elit dui laoreet dui, vitae tincidunt nibh sem eu
            lectus. Cras commodo pharetra dui vitae pretium. Proin luctus augue
            velit, ut malesuada sem pharetra non. Aenean imperdiet ultricies
            gravida.
          </p>
          <div>
            <button className="saveBtn">save</button>
          </div>
        </div>
      </div>
      <h2>Discover More </h2>
      <ExplorePage />
    </>
  );
}

export default OverlayCard;
