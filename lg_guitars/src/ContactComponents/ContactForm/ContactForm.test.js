// Tests for Contact Form

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";
import nock from "nock";

test("form and all inputs, labels & button renders", () => {
  render(<ContactForm />);

  //    Arrange
  const nameInput = screen.getByPlaceholderText("Name");
  const subjectInput = screen.getByPlaceholderText("Subject");
  const emailInput = screen.getByPlaceholderText("Email");
  const phoneInput = screen.getByPlaceholderText("Phone");
  const textInput = screen.getByPlaceholderText("Leave Message");
  const submitBtn = screen.getByRole("button", { name: "Submit" });

  // Assertions
  expect(nameInput).toBeInTheDocument();
  expect(subjectInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(textInput).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

test("input values can be changed", async () => {
  render(<ContactForm />);

  //    Arrange
  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "Paul Garton" },
  });

  await waitFor(() => {
    expect(screen.getByPlaceholderText("Name").value).toBe("Paul Garton");
  });
});

// Mock the full form
test("full form mock submit", async () => {
  render(<ContactForm />);

  //    Arrange
  const nameInput = screen.getByPlaceholderText("Name");
  const subjectInput = screen.getByPlaceholderText("Subject");
  const emailInput = screen.getByPlaceholderText("Email");
  const phoneInput = screen.getByPlaceholderText("Phone");
  const textInput = screen.getByPlaceholderText("Leave Message");
  const submitBtn = screen.getByRole("button", { name: "Submit" });

  // Act
  fireEvent.change(nameInput, { target: { value: "Paul Garton" } });
  fireEvent.change(subjectInput, { target: { value: "Test" } });
  fireEvent.change(emailInput, { target: { value: "pg@hotmail.com" } });
  fireEvent.change(phoneInput, { target: { value: "01332404040" } });
  fireEvent.change(textInput, { target: { value: "Test mock form" } });

  nock("https://bespoke-centaur-2bc4f2.netlify.app/contact-page");
});
