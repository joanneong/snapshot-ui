import "./SearchOverlay.css";

function SearchOverlay(props) {
  return (
    <form className="overlay h-screen">
      <input className="appearance-none bg-transparent border-b border-black focus:outline-none w-full" 
        type="text" placeholder="Take me to church"></input>
      <img className="icon" src="./images/cancel.svg" alt="cancel"></img>
    </form>
  );
}

export default SearchOverlay;
