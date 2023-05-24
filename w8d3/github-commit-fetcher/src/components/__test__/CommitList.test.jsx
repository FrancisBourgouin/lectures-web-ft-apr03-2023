import CommitList from "../CommitList";
import { render, screen } from "@testing-library/react";

import mockData from "../../mocks/commitData.json";

describe("CommitList Component", () => {
  it("should show a message when no commits are provided", () => {
    // ...
    const { getByText, queryByTestId } = render(<CommitList />);

    const element = getByText("There is no commits to show");
    const list = queryByTestId("commitList");
    // const element = queryByText("There is no commits to show");

    // screen.debug();
    expect(element).toBeInTheDocument();
    expect(list).not.toBeInTheDocument();
  });
  it("should show a list of commits when a commit array is provided", () => {
    // ...
    const { queryByText, queryByTestId } = render(<CommitList commits={mockData} />);

    const element = queryByText("There is no commits to show");
    const list = queryByTestId("commitList");
    // const element = queryByText("There is no commits to show");

    // screen.debug();
    expect(element).not.toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });
});
