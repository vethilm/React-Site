import "./cards.css";

function ThumbnailCard({ title, src }) {
  return (
    <>
      <div className="card-sm">
        <img className="card-img" src={src} alt={title} />
      </div>
    </>
  );
}

export default ThumbnailCard;
