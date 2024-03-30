import React from "react";
import { render, screen } from "@testing-library/react";
import TestPage from "./TestPage";

test("renders with sum equal to 3", () => {
  render(<TestPage />);
  const sumElement = screen.getByText(/3/i);
});
