import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders Vite text", () => {
    render(<App />);
    expect(screen.getByText(/Vite/i)).toBeInTheDocument();
  });
});
