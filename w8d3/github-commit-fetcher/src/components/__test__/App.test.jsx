import App from "../../App";

import { render, fireEvent, waitForElement, findByTestId } from "@testing-library/react";

describe("Testing the App component", () => {
  it("should show commits once the search has been completed", () => {
    // ...

    const { queryByTestId, queryByText } = render(<App />);

    const list = queryByTestId("commitList");
    expect(list).not.toBeInTheDocument();

    const formButton = queryByTestId("button");
    fireEvent.click(formButton);

    // screen.debug();

    waitForElement(() => queryByTestId("commitList")).then(() => {
      const element = queryByText("There is no commits to show");
      expect(element).not.toBeInTheDocument();

      const list2 = queryByTestId("commitList");
      expect(list2).toBeInTheDocument();
    });

    // findByTestId
  });
  xit("should not show commits if the search was invalid", () => {
    // ...
  });
});
