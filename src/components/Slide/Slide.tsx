import React from "react";
import Classnames from "classnames";

interface Props {
  foldBarColor?: "gold" | "gray";
  foldBarText?: React.ReactNode;
}

const Slide: React.FC<Props> = ({
  children,
  foldBarText,
  foldBarColor = "gray",
}) => {
  return (
    <div className="slide-content">
      {children}
      {/* fold bar */}

      <div className={Classnames("fold-bar", foldBarColor)}>
        <div className="fold-container">{foldBarText}</div>
      </div>
    </div>
  );
};

export default Slide;
