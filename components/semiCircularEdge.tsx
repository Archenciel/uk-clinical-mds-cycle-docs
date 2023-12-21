export const SemiCircularEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  sourceNode,
  targetNode,
  style = {},
  arrowHeadType,
  markerEndId,
}) => {
  // Adjust these values based on your node's dimensions and desired edge appearance
  const nodeWidth = 180; // Approximate width of the node
  const radius = 50; // Radius of the semi-circle

  // Calculate the starting point (left-middle of the node)
  const startX = sourceX - nodeWidth / 2;
  const startY = sourceY;

  // Define the path for a semi-circle on the left side of the node
  const path = `
    M ${startX} ${startY}
    A ${radius} ${radius} 0 1 1 ${startX} ${startY + radius * 2}
    A ${radius} ${radius} 0 1 1 ${startX} ${startY}
  `;

  return (
    <g>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={path}
        markerEnd={markerEndId}
      />
      {/* Additional elements */}
    </g>
  );
};
