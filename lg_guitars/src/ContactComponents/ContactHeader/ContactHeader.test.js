// Tests for Contact Header
import { render, screen } from "@testing-library/react";
import ContactHeader from "./ContactHeader";

test("contact header has correct text", () => {
  render(<ContactHeader />);

  const heading = screen.getByTestId("contact-header");

  expect(heading).toBeInTheDocument();
});
