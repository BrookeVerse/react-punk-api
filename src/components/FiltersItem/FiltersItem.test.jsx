import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FiltersItem from "./FiltersItem";

it("should render FiltersItem", () => {
  //arange
  render(<FiltersItem />);
  //act
  const filtersItem = document.querySelector("#filtersItem");
  //Assert
  expect(filtersItem).toBeInTheDocument();
});

it("should render the filters", () => {
  //arrange
  render(<FiltersItem />);
  //act
  const inputAbv = screen.getByTestId("abv");
  const inputClassic = screen.getByTestId("Classic");
  const inputAcidic = screen.getByTestId("Acidic");
  //assert
  expect(inputAbv).toBeInTheDocument();
  expect(inputClassic).toBeInTheDocument();
  expect(inputAcidic).toBeInTheDocument();
});

it("should allow user to click a filter", () => {
  //arrange
  render(<FiltersItem />);
  //Act
  const inputAbv = screen.getByTestId("abv");
//assert
  expect(userEvent.click(inputAbv));
});
