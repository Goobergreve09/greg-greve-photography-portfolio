import { Outlet } from "react-router-dom"
import Nav from "./components/Navbar";
import Favicon from "react-favicon";

import { useEffect, useState } from "react";
import "./app.css";
import arrowUpGif from "./assets/images/upArrow.png"; 

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });

  };
  return (
    <>
          <Favicon url="https://purepng.com/public/uploads/large/purepng.com-mountainmountainlarge-landformmountain-peakvolcanic-mountainfold-mountainblock-mountain-1411527067668chips.png"></Favicon>
      <Nav />
      <Outlet />
      {showButton && (
       <button onClick={scrollToTop} className="back-to-top">
       <img src={arrowUpGif} className="upGif" alt="Scroll to top" />
     </button>
      )}

    </>
  );
}

export default App;
