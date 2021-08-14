import "./Card.css";

function Card(props) {
  return (
    <div className="cardDiv relative">
      <div className="h-72 w-80 bg-white rounded-md flex-col p-5 m-6">
        <img className="videoThumbnail" src={props.thumbnailUrl} alt="video thumbnail"/>
        <h2 className="my-3">{props.videoTitle}</h2>
      </div>
    </div>
  );
}

export default Card;
