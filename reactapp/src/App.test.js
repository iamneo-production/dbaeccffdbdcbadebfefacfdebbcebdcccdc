import React from "react";
import App from "../App";
import { shallow, mount } from "enzyme";


var wrapper;
describe('Testing App Component', () => {

   // App Component renders without crashing 
    test('FE_render_page', () => {
        wrapper = mount(<App />);
        expect(wrapper.instance()).toBeDefined();
        wrapper.unmount();
    });

    // Testing the Start Quiz button 

    test('FE_start_button', () => {
        wrapper = mount(<App />);
        expect(wrapper.find('h1').text()).toBe('Quizz App');
        expect(wrapper.find('button').instance()).toBeDefined();
        wrapper.unmount();
    });

    // Checking the UI after clicking the Start Quiz button

    test('FE_start_app', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.text()).not.toBe('Start Quiz');
        })
        wrapper.unmount();
    });

    // After finishing all the questions, checking whether the show result button shows up

    test('FE_finish_test', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.simulate('click'));
        });
        
        expect(wrapper.find('Button').last().text()).toBe('Show Results');
        wrapper.unmount();
    });
})