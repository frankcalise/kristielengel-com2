import React from "react";
import Classnames from "classnames";

interface Props {
  foldBarColor?: "black" | "gold" | "gray";
  foldBarText?: React.ReactNode;
  short?: boolean;
}

const Slide: React.FC<Props> = ({
  children,
  foldBarText,
  foldBarColor,
  short = false,
}) => {
  console.log({ short, classnames: Classnames("slide-content", short) });
  return (
    <div className={`slide-content${short ? " short" : ""}`}>
      {children}
      {/* fold bar */}

      {!!foldBarColor && (
        <div className={Classnames("fold-bar", foldBarColor)}>
          <div className="fold-container">{foldBarText}</div>
        </div>
      )}
    </div>
  );
};

export default Slide;
