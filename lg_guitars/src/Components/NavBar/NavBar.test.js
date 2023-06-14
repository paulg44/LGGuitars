// Tests for the Navbar Component
// Imports
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

// Test Navbar Logo Renders
test("navbar logo renders", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  const navLogo = screen.getByAltText("logo");
  //   Test
  expect(navLogo).toBeInTheDocument();
});

// Test Navbar nav list renders
test("navbar list renders", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  const navList = screen.getByRole("list");
  expect(navList).toBeInTheDocument();
});
