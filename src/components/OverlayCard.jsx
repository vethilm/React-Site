import ThumbnailCard from "./ThumbnailCard";
import "./cards.css";

function OverlayCard({ display, selectedImage }) {
  if (display) {
    return (
      <>
        <div className="overlay">
          <ThumbnailCard size="card-lg" image={selectedImage}></ThumbnailCard>
          <div className="card-info">
            <p className="card-sm-title">title</p>
            <p className="card-sm-title">username</p>
          </div>
        </div>
      </>
    );
  }
}

export default OverlayCard;
