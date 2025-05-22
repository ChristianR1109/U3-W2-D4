import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import BookList from "../components/BookList";
import CommentArea from "../components/CommentArea";

test("renders the Welcome component", () => {
  () => {
    render(<Welcome />);

    screen.debug();
  };
});

test("Cards exist", () => {
  render(<BookList />);
  const cards = screen.getAllByTestId("card");
  expect(cards).toHaveClass("card");
});

test("renders the CommentArea component", () => {
  () => {
    render(<CommentArea />);

    screen.debug();
  };
});
