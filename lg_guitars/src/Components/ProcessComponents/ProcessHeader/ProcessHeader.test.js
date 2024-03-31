// Test file for Process Header

import { render, screen } from "@testing-library/react";
import ProcessHeader from "./ProcessHeader";

test("header renders", () => {
  render(<ProcessHeader />);

  expect(
    screen.getByRole("heading", { name: "Welcome To The P rocess" })
  ).toBeInTheDocument();
});
