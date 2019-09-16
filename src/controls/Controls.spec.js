// Test away
import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

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

test('test open-close-gate button-text-content', () => {
    const { getByTestId,rerender } = render(<Controls closed={false} />);
    expect(getByTestId('OpenOrClose-Gate-btn').textContent).toBe("Close Gate");
     rerender(<Controls closed={true} />);
     expect(getByTestId("OpenOrClose-Gate-btn").textContent).toBe("Open Gate");
})

test("test lock-locked-gate button-text-content", () => {
  const { getByTestId, rerender } = render(<Controls locked={false} />);
  expect(getByTestId("LockedOrUnlocked-Gate-btn").textContent).toBe("Lock Gate");
  rerender(<Controls locked={true} />);
  expect(getByTestId("LockedOrUnlocked-Gate-btn").textContent).toBe("Unlock Gate");
});

test("test open-close-gate button disabled", () => {
  const { getByTestId } = render(<Controls locked={true} />);
  expect(getByTestId("OpenOrClose-Gate-btn").props('disabled').toBe(true))
  
  
});
test("test lock-locked-gate button disabled", () => {
  const { getByTestId } = render(<Controls closed={false} />);
  expect(
    getByTestId("LockedOrUnlocked-Gate-btn")
      .props("disabled")
      .toBe(true)
  );
});