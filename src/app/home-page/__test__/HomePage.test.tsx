import HomePage from '../page';
import { render } from '@testing-library/react';

describe('Home page', () => {
  it.skip('should render the "Home" page', () => {
    const { asFragment } = render(<HomePage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
