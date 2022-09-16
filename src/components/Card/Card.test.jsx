import {render, screen} from "@testing-library/react";
import Card from "./Card";

it("should it renders a card", async() => {
    //Arrange
    render(<Card />);
    //Act
    const cards = screen.queryAllByRole("card");
    //Assert
    cards.forEach(card => {expect(card).toBeInTheDocument();})
});

it("show it renders an image", async() => {
    //Arrange
    render(<Card />);
    //Act
    const images = screen.queryAllByRole("image");
    //Assert
    images.forEach(image => {expect(image).toBeInTheDocument();})

});

it("show it renders an title", async() => {
    //Assert
    render(<Card />);
    //Act
    const titles = screen.queryAllByRole("titles");
    //Assert
    titles.forEach(title => {expect(title).toBeInTheDocument();})
});

it("show it renders a description", async() => {
    //Assert
    render(<Card />);
    //Act
    const descriptions = screen.queryAllByRole("descriptions");
    //Assert
    descriptions.forEach(description => {expect(description).toBeInTheDocument();})

});
