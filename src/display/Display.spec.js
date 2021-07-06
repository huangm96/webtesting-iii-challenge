// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from './Display'

test("Display renders correctly", () => {
    const locked = false;
    const closed = false;
  render(<Display locked={locked} closed={closed} />);
});



//displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
//when `locked` or `closed` use the `red-led` class
test("luck-unluck-info display", () => {
   
   const { getByTestId, rerender } = render(<Display locked={true} />);
  expect(getByTestId("luck-unluck-info").textContent).toBe('Locked');
    rerender(<Display locked={false} />);
    expect(getByTestId("luck-unluck-info").textContent).toBe("Unlocked");
    rerender(<Display locked={true} />);
    expect(getByTestId("luck-unluck-info").className).toBe("led red-led");
    rerender(<Display closed={true} />);
    expect(getByTestId("open-close-info").className).toBe("led red-led");
});

//displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
//when `unlocked` or `open` use the `green-led` class
test("open-close-info display", () => {
  const { getByTestId, rerender } = render(<Display closed={true} />);
  expect(getByTestId("open-close-info").textContent).toBe("Closed");
  rerender(<Display closed={false} />);
    expect(getByTestId("open-close-info").textContent).toBe("Open");
     rerender(<Display locked={false} />);
     expect(getByTestId("luck-unluck-info").className).toBe("led green-led");
    rerender(<Display closed={false} />);
    expect(getByTestId("open-close-info").className).toBe("led green-led");
    
});

