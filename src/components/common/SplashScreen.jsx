// eslint-disable-next-line
import { useEffect, useState } from "react";
import Animationstyle from "./SplashScreen.module.css";
import textImg from "../../assets/animations/text.png";
import leftImg from "../../assets/animations/leftslide.png";
import rightImg from "../../assets/animations/rightslide.png";

const SplashScreen = ({ onFinish }) => {
  const [hideSplash, setHideSplash] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    // Animation: 2.8s (zoom) + 1.4s (move up) + 5s (sides) + 5s (hold) + 1.2s (zoom-in) = 15.4s
    const holdDuration = 10200; // 2.8 + 1.4 + 5 + 5 seconds in ms
    const zoomInDuration = 1500;
    const timer1 = setTimeout(() => {
      setZoomIn(true);
      // After zoom-in, hide splash
      setTimeout(() => {
        setHideSplash(true);
        onFinish();
      }, zoomInDuration);
    }, holdDuration);
    return () => {
      clearTimeout(timer1);
    };
  }, [onFinish]);

  if (hideSplash) return null;

  return (
    <div className={Animationstyle.splashContainer}>
  <img
    src={textImg}
    alt="Text"
    className={`${Animationstyle.splashText} ${zoomIn ? Animationstyle.zoomIn : ""}`}
    draggable={false}
  />
  <div className={Animationstyle.splashLeft}>
    <img src={leftImg} alt="Left Slide" draggable={false} />
  </div>
  <div className={Animationstyle.splashRight}>
    <img src={rightImg} alt="Right Slide" draggable={false} />
  </div>
</div>
  );
};

export default SplashScreen; 
