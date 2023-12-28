import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import ReactDOM from 'react-dom';
import { Handle, Position, MiniMap, MarkerType } from 'reactflow';



export default function SemiCircularEdge({
  id,
  sourceX,
  sourceY,
  label,
  style = {},
  markerEndId,
}){
  // Define the radius of the small circle and label styles
  const circleRadius = 18;
  const fontSize = 12;
  const padding = 2; // Padding around text inside the rectangle

  // Adjust these for label positioning
  const labelX = sourceX - 60;
  const labelWidth = 80; // Maximum width of the label

  // SVG path for a small circle
  const path = `M ${sourceX} ${sourceY}
                m -${circleRadius}, 0
                a ${circleRadius},${circleRadius} 0 1,0 ${circleRadius * 2},0
                a ${circleRadius},${circleRadius} 0 1,0 -${circleRadius * 2},0`;

  return (
    <g>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={path}
        markerEnd={markerEndId}
      />
      <foreignObject
        x={labelX - labelWidth / 2}
        y={sourceY - fontSize - padding * 2}
        width={labelWidth}
        height="100" // Initial height, will expand as needed
      >
        <div
          style={{
            background: 'white',
            color: 'black',
            textAlign: 'center',
            fontSize: `${fontSize}px`,
            padding: `${padding}px`,
            borderRadius: '5px',
            maxWidth: `${labelWidth}px`,
            overflowWrap: 'break-word', // Wrap long words
            wordWrap: 'break-word', // Older browsers
          }}
        >
          {label}
        </div>
      </foreignObject>
    </g>
  );
};