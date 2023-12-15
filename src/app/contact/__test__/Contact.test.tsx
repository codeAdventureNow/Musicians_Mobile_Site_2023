import { render } from '@testing-library/react';
import Contact from '../page';

describe('Contact page', () => {
  it('should render the "Contact" page', () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });
});
