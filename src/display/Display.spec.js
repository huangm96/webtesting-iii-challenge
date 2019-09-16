// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from './Display'

test("Display renders correctly", () => {
    const locked = false;
    const closed = false;
  render(<Display locked={locked} closed={closed} />);
});

test("luck-unluck-info display", () => {
   
   const { getByTestId, rerender } = render(<Display locked={true} />);
  expect(getByTestId("luck-unluck-info").textContent).toBe('Locked');
    rerender(<Display locked={false} />);
    expect(getByTestId("luck-unluck-info").textContent).toBe("Unlocked");
    rerender(<Display locked={true} />);
    expect(getByTestId("luck-unluck-info").className).toBe("led red-led");
});
test("open-close-info display", () => {
  const { getByTestId, rerender } = render(<Display closed={true} />);
  expect(getByTestId("open-close-info").textContent).toBe("Closed");
  rerender(<Display closed={false} />);
    expect(getByTestId("open-close-info").textContent).toBe("Open");
    
    rerender(<Display closed={false} />);
    expect(getByTestId("open-close-info").className).toBe("led green-led");
    
});

