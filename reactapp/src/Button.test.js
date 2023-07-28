import React from "react";
import Button from "../src/components/UI/Button/Button";
import { shallow, mount } from "enzyme";

describe('Testing Button Component', () => {

    // render the button without any error
    
    test('FE_button_render', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.instance()).toBeDefined();
    })

    // displays the correct text inside the component

    test('FE_button_works', () => {
        const TestingInput = 'Button Works'
    const wrapper = shallow(<Button>{TestingInput}</Button>)
        expect(wrapper.props().children).toBe(TestingInput)
    })

})