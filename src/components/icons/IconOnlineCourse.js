import React from 'react';

const IconOnlineCourse = (props) => {
  let size = props.size || '48';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={size} viewBox="0 0 24 24" width={size}

    >
      <g><rect fill="none" height="24" width="24" /></g>
      <g>
        <path
          fill="#e4eb9e"
          d="M 16,6 V 4 C 16,2.89 15.11,2 14,2 H 10 C 8.89,2 8,2.89 8,4 V 6 H 2 v 13 c 0,1.11 0.89,2 2,2 h 16 c 1.11,0 2,-0.89 2,-2 V 6 Z M 10,4 h 4 v 2 h -4 z" />
        <path
          fill="#394029"
          d="M 8.9837209,9.4194503 V 17.744186 L 15.524584,13.581818 Z" />
      </g>
    </svg>
  )
};

export default IconOnlineCourse;