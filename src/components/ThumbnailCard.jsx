import "./cards.css";
import { Link } from "react-router-dom";

function ThumbnailCard({ image, size }) {
  return (
    <>
      <div className={size}>
        <Link to={`/image/${image.id}`}>
          <img className="card-img" src={image.src} alt={image.title} />
        </Link>
        <p className="card-sm-title">{image.title}</p>
      </div>
    </>
  );
}

export default ThumbnailCard;
