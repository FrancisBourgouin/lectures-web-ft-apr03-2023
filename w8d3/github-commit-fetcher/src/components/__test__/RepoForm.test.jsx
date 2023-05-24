import RepoForm from "../RepoForm";
import { render, fireEvent } from "@testing-library/react";

describe("RepoForm component", () => {
  it("Should return the proper content when the form is submitted", () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(<RepoForm onSubmit={mockFunction} />);

    const button = getByTestId("button");

    fireEvent.click(button);
    // mock Functions

    expect(mockFunction).toHaveBeenCalled();
  });
});
