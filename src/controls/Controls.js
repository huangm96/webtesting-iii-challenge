import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      <button
        disabled={!closed}
        onClick={toggleLocked}
        className="toggle-btn"
        data-testid="LockedOrUnlocked-Gate-btn"
      >
        {locked ? "Unlock Gate" : "Lock Gate"}
      </button>
      <button
        disabled={locked}
        onClick={toggleClosed}
        className="toggle-btn"
        data-testid="OpenOrClose-Gate-btn"
      >
        {closed ? "Open Gate" : "Close Gate"}
      </button>
    </div>
  );
};

export default Controls;
