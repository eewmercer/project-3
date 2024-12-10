import {fireEvent, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import HomePage from "./page"

test("test adding data to database with button click", async() => {
    render(<HomePage />)

    const inputElement = screen.getByPlaceholderText('inputName');
    fireEvent.change(inputElement, {target: {value:'healthy'}});

    await userEvent.click(screen.getByRole("button"))

})