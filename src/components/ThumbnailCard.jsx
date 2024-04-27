import "./cards.css";

function ThumbnailCard({ src, key }) {
  return (
    <>
      <div className="card-sm">
        <img className="card-img" src={src} alt={key} />
      </div>
    </>
  );
}

export default ThumbnailCard;
