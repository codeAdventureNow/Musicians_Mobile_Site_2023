import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInput from '../form-input';
import renderer from 'react-test-renderer';

describe('Form Input', () => {
  const user = userEvent.setup();
  it('should render the Form', () => {
    const formInput = renderer.create(<FormInput />).toJSON();
    expect(formInput).toMatchSnapshot();
  });

  it('call the onSubmit function', async () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(
      <FormInput onSubmit={mockOnSubmit} />
    );

    await act(async () => {
      fireEvent.change(getByLabelText('First/Last Name*'), {
        target: { value: 'Runberto Machna' },
      });
      fireEvent.change(getByLabelText('Zip Code*'), {
        target: { value: 90210 },
      });
      fireEvent.change(getByLabelText('Email*'), {
        target: { value: 'runberto@gmail.com' },
      });
      fireEvent.change(getByLabelText('Phone*'), {
        target: { value: 4087067554 },
      });
      fireEvent.change(
        getByLabelText('Which musical instruments would you like to learn?*'),
        { target: { value: ['guitar'] } }
      );
      fireEvent.change(getByLabelText('How did you hear about us?*'), {
        target: { value: 'Google Search' },
      });
    });

    await act(async () => {
      fireEvent.click(getByRole('button'));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
