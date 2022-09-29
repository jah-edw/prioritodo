import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  userEvent.setup();
});

beforeEach(() => {
  render(<App />);
});

test("a todo appears when I complete and submit the form", async () => {
  await userEvent.type(screen.getByPlaceholderText("title"), "learning React");
  await userEvent.selectOptions(screen.getByRole("combobox"), "high");
  await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

  expect(screen.getByTestId("displayedTodo")).toBeInTheDocument();
  expect(screen.getByTestId("displayedTodo")).toHaveTextContent(
    "learning React"
  );
});

test("the form is reset when once submitted", async () => {
  await userEvent.type(screen.getByPlaceholderText("title"), "learning React");
  await userEvent.selectOptions(screen.getByRole("combobox"), "high");
  await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

  expect(screen.getByPlaceholderText("title")).toHaveAttribute("value", "");
  expect(screen.getByRole("option", { name: "High" }).selected).toBe(false);
  expect(screen.getByTestId("displayedTodo")).toHaveTextContent(
    "learning React"
  );
});

test("the text is striked out when I click on it", async () => {
  await userEvent.type(screen.getByPlaceholderText("title"), "learning React");
  await userEvent.selectOptions(screen.getByRole("combobox"), "high");
  await userEvent.click(screen.getByRole("button", { name: /Submit/i }));
  await userEvent.click(screen.getByTestId("displayedTodo"));

  expect(screen.getByTestId("displayedTodo")).toHaveTextContent(
    "learning React"
  );
  expect(screen.getByTestId("displayedTodo")).toHaveProperty(
    "style.text-decoration",
    "line-through"
  );
});

describe("the background colour of the todo matches the priority level", () => {
  test("high priority === red", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("title"),
      "learning React"
    );
    await userEvent.selectOptions(screen.getByRole("combobox"), "high");
    await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(screen.getByTestId("todoContainerTest")).toHaveStyle(
      `background: 'rgb(254, 121, 104)'`
    );
  });

  test("medium priority === orange", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("title"),
      "learning React"
    );
    await userEvent.selectOptions(screen.getByRole("combobox"), "medium");
    await userEvent.click(screen.getByRole("button", { name: /Submit/i }));
    expect(screen.getByTestId("displayedTodo")).toHaveTextContent(
      "learning React"
    );
    expect(screen.getByTestId("todoContainerTest")).toHaveStyle(
      `background: 'rgb(251, 192, 147)'`
    );
  });

  test("low priority === yellow", async () => {
    await userEvent.type(
      screen.getByPlaceholderText("title"),
      "learning React"
    );
    await userEvent.selectOptions(screen.getByRole("combobox"), "low");
    await userEvent.click(screen.getByRole("button", { name: /Submit/i }));
    expect(screen.getByTestId("displayedTodo")).toHaveTextContent(
      "learning React"
    );
    expect(screen.getByTestId("todoContainerTest")).toHaveStyle(
      `background: 'rgb(255, 246, 143)'`
    );
  });
});
