import renderer from 'react-test-renderer';
import Contact from '../page';

describe('Contact page', () => {
  it('should render the "Contact" page', () => {
    const contact = renderer.create(<Contact />).toJSON();
    expect(contact).toMatchSnapshot();
  });
});
