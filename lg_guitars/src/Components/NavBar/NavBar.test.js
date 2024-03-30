// Tests for the Navbar Component
// Imports
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Process from "../../pages/Progress/Progress";
import Contact from "../../pages/Contact/Contact";

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

// Test Process navbar links to process page
test("process links", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/process-page" element={<Process />} />
      </Routes>
    </MemoryRouter>
  );

  const processLink = screen.getByRole("link", { name: "Process" });
  expect(processLink).toBeInTheDocument();
  expect(processLink.getAttribute("href")).toBe("/process-page");

  fireEvent.click(processLink);
  const processPage = screen.getByRole("heading", {
    name: "Design",
  });
  expect(processPage).toBeInTheDocument();
});

// Test Contact links navbar to contact page
test("contact links", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/contact-page" element={<Contact />} />
      </Routes>
    </MemoryRouter>
  );

  const contactLink = screen.getByRole("link", { name: "Contact" });
  expect(contactLink).toBeInTheDocument();
  expect(contactLink.getAttribute("href")).toBe("/contact-page");

  fireEvent.click(contactLink);
  const contactPage = screen.getByTestId("contact-header");
  expect(contactPage).toBeInTheDocument();
});

// Test Home links navbar to home page
test("home links", () => {
  render(
    <MemoryRouter>
      <NavBar></NavBar>
    </MemoryRouter>
  );

  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute("href")).toBe("/");
});
