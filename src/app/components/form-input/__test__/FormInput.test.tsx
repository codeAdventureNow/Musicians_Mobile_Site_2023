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

  // it('call the onSubmit function', async () => {
  //   const mockOnSubmit = jest.fn();
  //   const { getByTestId, getByRole } = render(
  //     <FormInput onSubmit={mockOnSubmit} />
  //   );

  //   await act(async () => {
  //     fireEvent.change(getByTestId('fullName'), {
  //       target: { value: 'Runberto Machna' },
  //     });
  //     fireEvent.change(getByTestId('zipCode'), {
  //       target: { value: 90210 },
  //     });
  //     fireEvent.change(getByTestId('email'), {
  //       target: { value: 'runberto@gmail.com' },
  //     });
  //     fireEvent.change(getByTestId('phoneNumber'), {
  //       target: { value: 14087067554 },
  //     });
  //     fireEvent.change(getByTestId('guitar'), {
  //       target: { value: ['guitar'] },
  //     });
  //     fireEvent.change(getByTestId('Referral'), {
  //       target: { value: 'Referral' },
  //     });
  //   });

    await act(async () => {
      fireEvent.click(getByRole('button'));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  describe('validiation errors', () => {
    it('renders the fullname validation error', async () => {
      const { getByTestId, container, getByRole } = render(<FormInput />);

      await act(async () => {
        const nameInput = getByTestId('fullName');
        fireEvent.change(nameInput, { target: { value: 'i' } });
        fireEvent.click(getByRole('button'));
      });

      expect(container.innerHTML).toMatch('Name must be at least 2 letters.');
    });

    it('renders the zipCode validation error for not having ENOUGH digits', async () => {
      const { getByTestId, getByRole } = render(<FormInput />);

      await act(async () => {
        const zipCode = getByTestId('zipCode');
        fireEvent.change(zipCode, { target: { value: 8 } });
        fireEvent.click(getByRole('button'));
      });

      expect(getByTestId('zipError').innerHTML).toMatch(
        'Too few digits, please enter a 5 digit zip code.'
      );
    });

    it('renders the zipCode validation error for not having ANY digits', async () => {
      const { getByTestId, getByRole } = render(<FormInput />);

      await act(async () => {
        const zipCode = getByTestId('zipCode');
        fireEvent.change(zipCode, { target: { value: '' } });
        fireEvent.click(getByRole('button'));
      });

      expect(getByTestId('zipError').innerHTML).toMatch(
        'Please enter a five digit zip code.'
      );
    });
  });
});
