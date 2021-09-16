import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, act } from '@testing-library/react';
import { LogIn, LogInIDs } from './logIn'
import { BrowserRouter } from 'react-router-dom';

describe('LogIn presentation component', () => {
    it('корректный заголовок', () => {
        const component = render(<BrowserRouter> <LogIn /> </BrowserRouter>);
            // оборачиваю в BrowserRouter, чтобы избежать ошибки 'You should not use <Link> outside a <Router>'
        expect(component.queryByTestId(LogInIDs.title)).toHaveTextContent('Authorization');
    })

    it('корректный 1 параграф', () => {
        const component = render(<BrowserRouter> <LogIn /> </BrowserRouter>);
        expect(component.queryByTestId(LogInIDs.paragraph1)).toHaveTextContent('Fill in the form below to register new account.');
    })

    it('корректный 2 параграф', () => {
        const component = render(<BrowserRouter> <LogIn /> </BrowserRouter>);
        expect(component.queryByTestId(LogInIDs.paragraph2)).toHaveTextContent('No account yet?');
    })

    it('корректное название кнопки', () => {
        const component = render(<BrowserRouter> <LogIn /> </BrowserRouter>);
        expect(component.queryByTestId(LogInIDs.button)).toHaveTextContent('Login');
    })

    it('ввод данных в поле email', () => {
        const email = 'test@login.com';

        const handleSubmit = jest.fn();
        const setPassword = jest.fn();
        const setEmail = jest.fn();

        const component = render(<BrowserRouter> <LogIn handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/> </BrowserRouter>);

        const field = component.queryByTestId(LogInIDs.logInField);

        act(() => {
            fireEvent.change(field, {
                target: {
                    value: email,
                },
            })
        })

        expect(setEmail).toHaveBeenLastCalledWith(email);
    })

    it('ввод данных в поле password', () => {
        const password = '1111111';

        const handleSubmit = jest.fn();
        const setPassword = jest.fn();
        const setEmail = jest.fn();

        const component = render(<BrowserRouter> <LogIn handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/> </BrowserRouter>);

        const field = component.queryByTestId(LogInIDs.passwordField);

        act(() => {
            fireEvent.change(field, {
                target: {
                    value: password,
                },
            })
        })

        expect(setPassword).toHaveBeenLastCalledWith(password);
    }) 

     it('вызов метода handleSubmit при клике на кнопку', () => {
        const handleSubmit = jest.fn();
        const setPassword = jest.fn();
        const setEmail = jest.fn();

        const component = render(<BrowserRouter> <LogIn handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/> </BrowserRouter>);

        const button = component.queryByTestId(LogInIDs.button);

        act(() => {
            fireEvent.click(button)
        })

        expect(handleSubmit).toBeCalled();
    })
})