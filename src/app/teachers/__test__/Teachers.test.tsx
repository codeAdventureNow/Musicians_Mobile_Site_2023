import renderer from 'react-test-renderer';
import Teachers from '../page';

describe('Teachers', () => {
  it('should render the "FAQ" page', () => {
    const teachers = renderer.create(<Teachers />).toJSON();
    expect(teachers).toMatchSnapshot();
  });
});
