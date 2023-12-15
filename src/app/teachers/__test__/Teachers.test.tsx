import Teachers from '../page';
import { render } from '@testing-library/react';

describe('Teachers', () => {
  it('should render the "Teachers" page', () => {
    const { asFragment } = render(<Teachers />);

    expect(asFragment()).toMatchSnapshot();
  });
});
