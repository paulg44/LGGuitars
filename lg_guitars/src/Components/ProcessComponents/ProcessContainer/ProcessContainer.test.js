// Test file for Process Container

import { render, screen } from "@testing-library/react";
import ProcessContainer from "./ProcessContainer";

test("container header renders", () => {
  render(<ProcessContainer />);

  expect(screen.getByRole("heading", { name: "Design" })).toBeInTheDocument();
});
