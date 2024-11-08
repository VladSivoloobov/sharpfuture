import { useState, useRef, useEffect } from "react";
import "./VideoBackground.scss";

export default function VideoBackground({
  src,
  offset,
  type,
  fixed,
  currentMouseMove = { x: 0, y: 0 },
}) {
  const video = useRef(null);
  const [translateBackground, setTranslateBackground] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const centerX =
      -(Math.abs(window.innerWidth - video.current.offsetWidth) / 2) / 2;
    const centerY =
      -(Math.abs(window.innerHeight - video.current.offsetHeight) / 2) / 2;

    let translatedX = centerX + currentMouseMove.x / 30 / 2;
    let translatedY = centerY + currentMouseMove.y / 30 / 2;

    if (translatedX < centerX) {
      translatedX = centerX;
    } else if (translatedX > 0) {
      translatedX = 0;
    }

    if (translatedY < centerY) {
      translatedY = centerY;
    } else if (translatedY > 0) {
      translatedY = 0;
    }

    setTranslateBackground({
      x: translatedX,
      y: translatedY,
    });
  }, [video, currentMouseMove]);

  return (
    <div
      className="video-background-wrapper"
      style={{
        top: offset + "px",
      }}
    >
      <video
        data-fixed={fixed}
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
        style={{
          objectPosition: `${translateBackground.x}px ${translateBackground.y}px`,
        }}
        ref={video}
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
}
