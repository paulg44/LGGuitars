// Test file for Contact Page (Make sure everything renders)
import { render, screen } from "@testing-library/react";
import ContactForm from "../../ContactComponents/ContactForm/ContactForm";
import ContactHeader from "../../ContactComponents/ContactHeader/ContactHeader";

// Contact Header renders
test("does contact header render", () => {
  render(<ContactHeader />);

  const heading = screen.getByTestId("contact-header");

  expect(heading).toBeInTheDocument();
});

// Contact Form renders
test("does contact form render", () => {
  render(<ContactForm />);

  const formBtn = screen.getByRole("button", { name: "Submit" });

  expect(formBtn).toBeInTheDocument();
});
