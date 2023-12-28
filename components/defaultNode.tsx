import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import ReactDOM from 'react-dom';
import { Handle, Position, MiniMap, MarkerType } from 'reactflow';

export default function DefaultNode ({ data }){

  const [showDetails, setShowDetails] = React.useState(false);
  const [detailBoxPosition, setDetailBoxPosition] = React.useState({});
  const nodeRef = React.useRef(null);

  const onMouseEnter = () => {
    if (nodeRef.current) {
      const rect = nodeRef.current.getBoundingClientRect();
      setDetailBoxPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
    setShowDetails(true);
  };

  return  (
    <>
    <Handle type="target" position={Position.Top} id="a" />
        <div
        ref={nodeRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setShowDetails(false)}
        style={{ 
            padding: '10px', 
            minWidth: '180px',
            maxWidth: '180px',
            color: '#333', 
            textAlign: 'center',
            position: 'relative',
            fontSize: '10pt'
        }}
        >
        {data.label}
        {showDetails && data.details && ReactDOM.createPortal(
            <div style={{ 
            position: 'absolute', 
            textAlign: 'left', 
            top: `${detailBoxPosition.top}px`, 
            left: `${detailBoxPosition.left}px`, 
            background: 'black', 
            border: '1px solid black', 
            maxWidth: "500px",
            padding: '5px 10px', 
            borderRadius: '5px', 
            zIndex: 5000, 
            color: "#ffff" 
            }}
            dangerouslySetInnerHTML={{ __html: data.details }}
            />,
            document.body
        )}
        </div>
        <Handle type="source" position={Position.Bottom} id="b" />
        {/* Left handles */}
        <Handle
            type="source"
            position={Position.Left}
            id="left1"
            style={{ top: '50%', visibility:"hidden" }}  
        />
    </>
  );
};