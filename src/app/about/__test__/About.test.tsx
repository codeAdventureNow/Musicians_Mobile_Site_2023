import renderer from 'react-test-renderer';
import About from '../page';

describe('About', () => {
  it('should render the "About" page', () => {
    const aboutPage = renderer.create(<About />).toJSON();
    expect(aboutPage).toMatchSnapshot();
  });
});
