import "./Card.css";

function Card(props) {
  return (
    <div className="h-72 w-80 bg-white rounded-md flex-col">
      <img className="videoThumbnail mx-auto mt-4" src={props.thumbnailUrl} alt="video thumbnail"/>
      <div className="mx-auto">
        <h2 className="m-4">{props.videoTitle}</h2>
      </div>
    </div>
  );
}

export default Card;
