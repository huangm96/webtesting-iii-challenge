import React from 'react';

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className="display panel">
      <div className={lockedClass} data-testid="luck-unluck-info">
        {locked ? "Locked" : "Unlocked"}
      </div>
      <div className={closedClass} data-testid="open-close-info">
        {closed ? "Closed" : "Open"}
      </div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false,
};

export default Display;
