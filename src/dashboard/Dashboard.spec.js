// Test away
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from './Dashboard'
import Display from "../display/Display";

test("Dashboard renders correctly", () => {
  render(<Dashboard />);
});

test("defaults to unlocked and open", () => {
  const { getByText } = render(<Display />);
  getByText(/unlocked/i);
  getByText(/open/i);
});
