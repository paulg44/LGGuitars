// Test file for Process Content

import { render, screen } from "@testing-library/react";
import ProcessContent from "./ProcessContent";

test("content renders", () => {
  render(<ProcessContent />);

  expect(screen.getByTestId("processTestID")).toBeInTheDocument();
});
