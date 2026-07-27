import { useState } from "react";
// A custom helper function to truncate the texts
function TextExpander({
  children,
  collapsedNumWords = 15,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#1F09CD",
  expanded = false,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const buttonStyle = {
    border: "none",
    background: "none",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <>
      <div className={className}>
        <span>{displayText}</span>
        <button onClick={() => setIsExpanded((ex) => !ex)} style={buttonStyle}>
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </div>
    </>
  );
}

export default TextExpander;
