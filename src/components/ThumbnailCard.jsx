import "./cards.css";

function ThumbnailCard({ onClick, image, size }) {
  return (
    <>
      <div className={size} onClick={() => onClick(image)}>
        <img className="card-img" src={image.src} alt={image.title} />
        <p className="card-sm-title">{image.title}</p>
      </div>
    </>
  );
}

export default ThumbnailCard;
