import Card from "../components/Card.js";
import Header from "../components/Header.js";

import "../common.css";

function Homepage() {
  return (
    <div className="page h-screen">
      <Header />
      <div className="grid sm:grid-cols-3 justify-center">
        <Card thumbnailUrl="https://i.ytimg.com/vi/PVjiKRfKpPI/mqdefault.jpg" videoTitle="Video Title" />
      </div> 
    </div>
  );
}

export default Homepage;
