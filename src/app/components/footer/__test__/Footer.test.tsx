import renderer from 'react-test-renderer';
import Footer from '../footer';

describe('Footer', () => {
  it('should render the Footer', () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
