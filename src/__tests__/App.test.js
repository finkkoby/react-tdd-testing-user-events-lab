import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event"

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />)
  expect(screen.getByPlaceholderText("name")).toBeInTheDocument()
  expect(screen.getByPlaceholderText("email address")).toBeInTheDocument()
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />)
  expect(screen.getAllByRole("checkbox").length).toEqual(3)
});

test("the checkboxes are initially unchecked", () => {
  render(<App />)
  expect(screen.getByRole('checkbox', { name: /coding/i})).not.toBeChecked()
  expect(screen.getByRole('checkbox', { name: /painting/i})).not.toBeChecked()
  expect(screen.getByRole('checkbox', { name: /reading/i})).not.toBeChecked()
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />)
  const nameInput = screen.getByPlaceholderText("name")
  userEvent.type(nameInput, "my name")
  expect(screen.getByDisplayValue("my name")).toBeInTheDocument()

  const emailInput = screen.getByPlaceholderText("email address")
  userEvent.type(emailInput, "myname@email.com")
  expect(screen.getByDisplayValue("myname@email.com")).toBeInTheDocument()
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />)

  const codingCheck = screen.getByRole("checkbox", { name: /coding/i })
  userEvent.click(codingCheck)
  expect(codingCheck).toBeChecked()

  const paintingCheck = screen.getByRole("checkbox", { name: /painting/i })
  userEvent.click(paintingCheck)
  expect(paintingCheck).toBeChecked()

  const readingCheck = screen.getByRole("checkbox", { name: /reading/i })
  userEvent.click(readingCheck)
  expect(readingCheck).toBeChecked()
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />)

  const submit = screen.getByRole("button", { name: /submit/i })
  userEvent.click(submit)
  expect(screen.getByRole("heading", {
    name: /thank you for submitting your form/i,
    level: 3
  }))
});
