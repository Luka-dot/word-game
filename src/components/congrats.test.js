import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../../test/testUtils';

import Congrats from './congrats';

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
} 

Enzyme.configure({ adapter: new Adapter() });

test('render without error', () => {

});
test('renders no text when success prop is false', () => {

});
test('renders non-empty congrats message when success is true', () => {

});