import {render, screen} from "@testing-library/react";
import Card from "./Card";

it("should render a card", async() => {
    //Arrange
    render(<Card />);
    //Act
    const cards = screen.queryAllByRole("card");
    //Assert
    cards.forEach(card => {expect(card).toBeInTheDocument();})
});

it("show render an image", async() => {
    //Arrange
    render(<Card />);
    //Act
    const images = screen.queryAllByRole("image");
    //Assert
    images.forEach(image => {expect(image).toBeInTheDocument();})

});

it("show render an title", async() => {
    //Assert
    render(<Card />);
    //Act
    const titles = screen.queryAllByRole("titles");
    //Assert
    titles.forEach(title => {expect(title).toBeInTheDocument();})
});

it("show render a description", async() => {
    //Assert
    render(<Card />);
    //Act
    const descriptions = screen.queryAllByRole("descriptions");
    //Assert
    descriptions.forEach(description => {expect(description).toBeInTheDocument();})

});
