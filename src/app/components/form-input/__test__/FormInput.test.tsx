import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
  getByTestId,
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
    const { getByTestId, getByRole } = render(
      <FormInput onSubmit={mockOnSubmit} />
    );

    await act(async () => {
      fireEvent.change(getByTestId('fullName'), {
        target: { value: 'Runberto Machna' },
      });
      fireEvent.change(getByTestId('zipCode'), {
        target: { value: 90210 },
      });
      fireEvent.change(getByTestId('email'), {
        target: { value: 'runberto@gmail.com' },
      });
      fireEvent.change(getByTestId('phoneNumber'), {
        target: { value: 4087067554 },
      });
      fireEvent.change(getByTestId('guitar'), {
        target: { value: ['guitar'] },
      });
      fireEvent.change(getByTestId('Referral'), {
        target: { value: 'Referral' },
      });
    });

    await act(async () => {
      fireEvent.click(getByRole('button'));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
