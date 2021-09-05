import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

import SearchOverlay from "./SearchOverlay";
import { ICON_WIDTH } from "../../constants";

import "./Header.css";

function Header(props) {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [moveSearchBy, setMoveSearchBy] = useState(0);

  const containerRef = useRef();

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;
    setMoveSearchBy(-1 * containerWidth + ICON_WIDTH);
  }, []);

  const onClickSearch = ({currentTarget}) => {
    gsap.to(currentTarget, {x: moveSearchBy});
    setShowSearchOverlay(true);
  };

  return (
    <div className="mx-4 py-6" ref={ containerRef }>
        { !showSearchOverlay && <img className="h-8 inline-block" src="./images/logo.svg" alt="snapshot logo"></img> }
        { !showSearchOverlay && <img className="icon" src="./images/account.svg" alt="account"></img> }
        <img className="icon" id="search-icon" src="./images/search.svg" alt="search" onClick={onClickSearch}></img>
      { showSearchOverlay && <SearchOverlay /> }
    </div>
  );
}

export default Header;
