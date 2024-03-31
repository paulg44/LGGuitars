// Footer Test File

import { render, screen } from "@testing-library/react";
import Footer from "./Footer.js";

test("footer renders", () => {
  render(<Footer />);

  const pgDesign = screen.getByText("Website designed & created by PG Design");

  expect(pgDesign).toBeInTheDocument();
});
