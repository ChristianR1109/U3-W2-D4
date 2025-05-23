import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";
import BookList from "../components/BookList";
import CommentArea from "../components/CommentArea";

describe("App level testing", () => {
  it("renders the Welcome Component"),
    () => {
      render(<App />);
      const h1 = screen.getByText(/Benvenuti in EpiBooks!/i);
      expect(h1).toBeInTheDocument();
    };
});

test("renders the CommentArea component", () => {
  () => {
    render(<CommentArea />);

    screen.debug();
  };
});
