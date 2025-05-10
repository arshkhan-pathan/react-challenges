import React, { useState, ReactNode } from "react";
import "./Tooltip.css";

type TooltipProps = {
  children: ReactNode;
  content?: string;
  position?: "top" | "bottom" | "left" | "right";
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content = "Hello",
  position = "top",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span className="tooltip-target">{children}</span>
      {visible && (
        <div className={`tooltip-box tooltip-${position}`}>{content}</div>
      )}
    </div>
  );
};

export default Tooltip;
