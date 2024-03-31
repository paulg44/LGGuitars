// Test file for Guitar Card Container
import { render, screen } from "@testing-library/react";
import GuitarCardContainer from "./GuitarCardContainer";

test("image grid render", () => {
  render(<GuitarCardContainer />);

  const imageGrid = screen.getByTestId("imageGrid");

  expect(imageGrid).toBeInTheDocument();
});
