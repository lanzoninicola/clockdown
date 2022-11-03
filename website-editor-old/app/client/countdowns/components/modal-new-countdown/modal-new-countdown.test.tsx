import { render } from "@test-utils/render";

import ModalNewCountdown from "./modal-new-countdown";

describe("Testing the modal for a new countdown", () => {
  it("should render the save button", () => {
    const { getByText, debug } = render(<ModalNewCountdown />);

    debug();
    // const button = getByText(/Save/i);
    // expect(button).not.toBeUndefined();
  });

  it.todo("should render the save button disabled", () => {
    const { getByText } = render(<ModalNewCountdown />);
    const button = getByText(/Save/i);
    expect(button).toBeDisabled();
  });
});

export {};
