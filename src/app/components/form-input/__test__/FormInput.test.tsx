import FormInput from '../form-input';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Form Input', () => {
  it('should render our Form', () => {
    render(<FormInput />); // ARRANGE

    //ACT
    const contactForm = screen.getByTestId('contact-form');

    expect(contactForm).toBeInTheDocument(); // ASSERT
  });

  //   it('should have the ability to type in the input', () => {
  //     render(<FormInput />);
  //     const nameInput = screen.getByTestId('fullName');
  //     fireEvent.click(nameInput);
  //     fireEvent.change(nameInput, { target: { value: 'Hen' } });

  //     expect(nameInput.getByDisplayValue('Hen')).toBe('Hen Roberts');
  //   });
});
