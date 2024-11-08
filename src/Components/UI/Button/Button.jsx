import { useState } from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

export const ButtonLink = (props) => {
  const [getBubbleClickPosition, setBubbleClickPosition] = useState(null);

  return (
    <Link
      {...props}
      onClick={(e) => {
        const observer = e.currentTarget.getBoundingClientRect();
        const topOffset = Math.abs(e.clientY - observer.top);
        const leftOffset = Math.abs(e.clientX - observer.left);

        setBubbleClickPosition({
          x: leftOffset,
          y: topOffset,
        });
      }}
      onAnimationEnd={() => {
        setBubbleClickPosition(null);
      }}
      className={"button " + (props.className ? props.className : "")}
      data-clicked={getBubbleClickPosition ? true : false}
    >
      <span
        style={{
          display: !getBubbleClickPosition ? "none" : "block",
          top: !getBubbleClickPosition ? "0" : getBubbleClickPosition.y + "px",
          left: !getBubbleClickPosition ? "0" : getBubbleClickPosition.x + "px",
        }}
        className="bubble-effect"
      ></span>
      {props.children}
    </Link>
  );
};
