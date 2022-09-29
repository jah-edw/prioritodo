import React from "react";
import { render, screen } from "@testing-library/react";
import { create } from "react-test-renderer";
import Todo from "../Components/Todo";
import Sidebar from "../Components/Sidebar";

// refactor
// beforeEach(() => {
//   render(<Sidebar />)
// const testInstance = create(<Todo {...props} />)
// testComponent = testInstance.root;
// })

describe("sidebar", () => {
  test("renders the title", () => {
    render(<Sidebar />);
    const sideBarTitle = screen.getByText(/add a todo/i);
    expect(sideBarTitle).toBeInTheDocument();
  });

  test("renders the form and its input fields", () => {
    render(<Sidebar />);

    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });

  test("renders the forms select", () => {
    render(<Sidebar />);

    const selector = screen.getByRole("combobox");
    expect(selector).toBeInTheDocument();
  });
  test("renders the forms select", () => {
    render(<Sidebar />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

describe("todo container", () => {
  let props = {
    item: {
      todo: "Test todo",
      priority: "high",
    },
  };

  test("renders the upcoming todos title", () => {
    const testInstance = create(<Todo {...props} />);
    const testComponent = testInstance.root;

    const toDoTitle = testComponent.findByType("p").children;
    expect(toDoTitle).toContain(props.item.todo);
  });
});
