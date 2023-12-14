import renderer from 'react-test-renderer';
import HomePage from '../page';
import { render } from '@testing-library/react';

describe('Home page', () => {
  it('should render the "Home" page', () => {
    const { asFragment } = render(<HomePage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
