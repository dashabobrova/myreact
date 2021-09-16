// useLoginState.test.js

import { act, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useLoginState, handleSubmit } from './useLoginState';
import {MemoryRouter} from 'react-router-dom';
import { userApi } from '../api/request/user';


jest.mock('../api/request/user.js');

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('useState tests', () => {
  it('should use setState value', () => {
    const { result } = renderHook(() => useLoginState(), {wrapper: MemoryRouter})
            //в хуке есть обращение к роутеру и нужно хук обернуть в MemoryRouter
    act(() => {
      result.current.setEmail('smth')
    })

    act(() => {
      result.current.setPassword('111111')
    })

    act(() => {
      result.current.setError('error')
    })
  
    expect(result.current.email).toBe('smth')
    expect(result.current.password).toBe('111111')
    expect(result.current.error).toBe('error')
  })

 /*  test('вызов api', done => {

    const { result } = renderHook(() => useLoginState(), {wrapper: MemoryRouter}); 
 
    act(() => {
      result.current.handleSubmit()
    })

    const email = 'test@login.com'; 
    const password = '1111111'; 
     
    function callback(data) { 
      try { 
        expect(handleSubmit()).tobe(email, password); 
        done(); 
      } catch (error) { 
        done(error); 
      } 
    } 
     
    handleSubmit(callback); 

  }) */

/*   test('вызов api', done => { 
 
    const { result } = renderHook(() => useLoginState(), {wrapper: MemoryRouter});  
  
    act(() => { 
      result.current.handleSubmit() 
    }) 
 
    const email = 'test@login.com';  
    const password = '1111111';  
      
    function callback(data) {  
      try {  
        expect(data).tobe(email, password); 
        done();  
      } catch (error) {  
        done(error);  
      }  
    }  
      
    handleSubmit(callback);  
 
  }) */
  
 /*  test('вызов роутера (push)', () => {
    const { getByRole  } = renderHook(() => useLoginState(), {wrapper: MemoryRouter})

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/chatpage');
  })  */

})