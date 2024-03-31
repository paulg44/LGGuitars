// Test file for Main Header
import { render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";

test("header renders", () => {
  render(<MainHeader />);

  expect(
    screen.getByRole("heading", { name: "LG G uitars" })
  ).toBeInTheDocument();
});
