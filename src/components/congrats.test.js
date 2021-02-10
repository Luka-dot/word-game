import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import Congrats from './congrats';


const defaultProps = { success: false};

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }   // setting default with option to overide with props.
    return shallow(<Congrats {...setupProps} />)
} 

Enzyme.configure({ adapter: new Adapter() });

test('render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats'); 
    expect(component.length).toBe(1);
});
test('renders no text when success prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats'); 
    expect(component.text()).toBe('');
});
test('renders non-empty congrats message when success is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps)
});