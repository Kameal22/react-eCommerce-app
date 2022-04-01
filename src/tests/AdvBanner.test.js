import { render, screen } from "@testing-library/react";
import AdvBanner from "../components/banner/AdvBanner";
import "@testing-library/jest-dom";

test("Should render advertisement banner", () => {
  render(<AdvBanner />);

  const banner = screen.getByTestId("advBanner");
  expect(banner).toBeInTheDocument();
});
