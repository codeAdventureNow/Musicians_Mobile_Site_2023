import { render } from '@testing-library/react';
import Footer from '../footer';

describe('Footer', () => {
  it('should render the "Footer" component', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
