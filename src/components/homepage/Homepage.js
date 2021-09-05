import Card from "../Card.js";
import Header from "../header/Header.js";

import React, { useEffect, useState } from "react";

function Homepage(props) {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    setCardDetails([
      {"id": 1, "thumbnailUrl": "https://i.ytimg.com/vi/PVjiKRfKpPI/mqdefault.jpg", "videoTitle": "Test Video 1"},
      {"id": 2, "thumbnailUrl": "https://i.ytimg.com/vi/PVjiKRfKpPI/mqdefault.jpg", "videoTitle": "Test Video 2"},
      {"id": 3, "thumbnailUrl": "https://i.ytimg.com/vi/PVjiKRfKpPI/mqdefault.jpg", "videoTitle": "Test Video 3"}
    ])
  }, []);

  return (
    <div className="page h-screen">
      <Header />
      <div className="grid px-7 sm:grid-cols-3 justify-center">
        {cardDetails.map(cardDetail => (
          <Card key={cardDetail.id} thumbnailUrl={cardDetail.thumbnailUrl} videoTitle={cardDetail.videoTitle} />
        ))}
      </div> 
    </div>
  );
}

export default Homepage;
