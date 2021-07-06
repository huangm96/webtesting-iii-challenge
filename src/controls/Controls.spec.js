// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("Controls renders correctly", () => {
  const toggleClosed = jest.fn();
  const toggleLocked = jest.fn();
  const locked = false;
  const closed = false;
  render(
    <Controls
      locked={locked}
      closed={closed}
      toggleLocked={toggleLocked}
      toggleClosed={toggleClosed}
    />
  );
});

// test toggle function when click Open-Or-Close-Gate button, locked state = false;
test("Toggle function is called when Open-Or-Close-Gate buttons click", () => {
  const toggleClosed = jest.fn();

  const { getByTestId } = render(<Controls toggleClosed={toggleClosed} />);

  const OpenOrCloseGatebtn = getByTestId("OpenOrClose-Gate-btn");

  fireEvent.click(OpenOrCloseGatebtn);

  expect(toggleClosed).toHaveBeenCalled();
});

// test toggle function when click Locked-Or-Unlocked-Gate button, closed state = true;
test("Toggle function is called when Locked-Or-Unlocked-Gate buttons click", () => {
  const toggleLocked = jest.fn();
  const { getByTestId } = render(
    <Controls toggleLocked={toggleLocked} closed={true} />
  );
  const LockedOrUnlockedGatebtn = getByTestId("LockedOrUnlocked-Gate-btn");

  fireEvent.click(LockedOrUnlockedGatebtn);

  expect(toggleLocked).toHaveBeenCalled();
});

//buttons' text changes to reflect the state the door will be in if clicked
test("test open-close-gate button-text-content", () => {
  const { getByTestId, rerender } = render(<Controls closed={false} />);
  expect(getByTestId("OpenOrClose-Gate-btn").textContent).toBe("Close Gate");
  rerender(<Controls closed={true} />);
  expect(getByTestId("OpenOrClose-Gate-btn").textContent).toBe("Open Gate");
});

test("test lock-locked-gate button-text-content", () => {
  const { getByTestId, rerender } = render(<Controls locked={false} />);
  expect(getByTestId("LockedOrUnlocked-Gate-btn").textContent).toBe(
    "Lock Gate"
  );
  rerender(<Controls locked={true} />);
  expect(getByTestId("LockedOrUnlocked-Gate-btn").textContent).toBe(
    "Unlock Gate"
  );
});

//the closed toggle button is disabled if the gate is locked
test("test open-close-gate button disabled", () => {
  const { getByTestId } = render(<Controls locked={true} />);
  expect(getByTestId("OpenOrClose-Gate-btn").disabled).toBe(true);
});

//the locked toggle button is disabled if the gate is open
test("test lock-locked-gate button disabled", () => {
  const { getByTestId } = render(<Controls closed={false} />);
  expect(getByTestId("LockedOrUnlocked-Gate-btn").disabled).toBe(true);
});
