import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../Button'
import { expect } from 'chai';


test('renders the button with a label and check handleClick', ()=>{

    // expect(true).toBeTruthy();

    const mockClickHandler =  vi.fn();

    render(<Button label="Click me" onClick={mockClickHandler}></Button>)

    // const button = screen.getByText('Click me')
    // // expect(button).toBeInTheDocument();

    // fireEvent.click(button)
    // expect(mockClickHandler).toHaveBeenCalledTimes(1);
})