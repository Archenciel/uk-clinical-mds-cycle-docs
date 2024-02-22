import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import ReactDOM from "react-dom";
import { Handle, Position, MiniMap, MarkerType } from "reactflow";

export default function RightLeftNode({ data }) {
  const [showDetails, setShowDetails] = React.useState(false);
  const [detailBoxPosition, setDetailBoxPosition] = React.useState({});
  const nodeRef = React.useRef(null);

  const onMouseEnter = () => {
    if (nodeRef.current) {
      const rect = nodeRef.current.getBoundingClientRect();
      setDetailBoxPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setShowDetails(true);
  };

  return (
    <>
      <div
        ref={nodeRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setShowDetails(false)}
        style={{
          padding: "10px",
          minWidth: "180px",
          maxWidth: "180px",
          color: "#333",
          textAlign: "center",
          position: "relative",
          fontSize: "10pt",
          zIndex: 99999,
        }}
      >
        {data.label}
        {showDetails &&
          data.details &&
          ReactDOM.createPortal(
            <div
              style={{
                position: "absolute",
                textAlign: "left",
                top: `${detailBoxPosition.top}px`,
                left: `${detailBoxPosition.left}px`,
                background: "#ffffffe7",
                border: "1px solid black",
                maxWidth: "500px",
                padding: "5px 10px",
                borderRadius: "2px",
                zIndex: 99999,
                color: "black",
              }}
              dangerouslySetInnerHTML={{ __html: data.details }}
            />,
            document.body
          )}
      </div>
      {/* Left handle */}
      <Handle type="source" position={Position.Left} id="l" />
      {/* Right handles */}
      <Handle type="target" position={Position.Right} id="r" />

      {/* Upper and Lower handles */}
      <Handle
        type="source"
        position={Position.Top}
        id="top1"
        style={{ top: "50%", visibility: "hidden" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom1"
        style={{ top: "50%", visibility: "hidden" }}
      />
    </>
  );
}
