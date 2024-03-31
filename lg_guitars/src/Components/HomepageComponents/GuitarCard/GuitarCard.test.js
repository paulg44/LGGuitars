import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import GuitarCard from "./GuitarCard";

// Test page renders
test("page render", function () {
  const { container } = render(
    <MemoryRouter>
      <GuitarCard />
    </MemoryRouter>
  );
  // Test
  expect(container).toBeInTheDocument();
});

test("images render", () => {
  render(<GuitarCard />);

  expect(screen.getByTestId("cardImage")).toBeInTheDocument();
});
