import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("Booklist functionality", () => {
  it("looks for 150 book card in the document", () => {
    render(<BookList books={fantasy} />);

    const bookCards = screen.getAllByTestId("card");
    expect(bookCards).toHaveLength(150);
  });

  it("checks filtering functionality", async () => {
    render(<BookList books={fantasy} />);

    const inputField = screen.getByPlaceholderText(/cerca un libro/i);
    const user = userEvent.setup();
    await user.type(inputField, "sword");

    const bookCards = screen.getAllByTestId("card");
    expact(bookCards).toHaveLength(9);
  });

  it("changes border color upon clicking a card", async () => {
    render(<BookList books={fantasy} />);
    const firstCard = screen.getAllByTestId("card")[0];

    const user = userEvent.setup();
    await user.click(firstCard);
    expect(firstCard).thoHaveStyle()
  });
});
