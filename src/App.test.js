import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => shallow(<App />)

test('App component render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'App');
    expect(component.length).toBe(1);
});