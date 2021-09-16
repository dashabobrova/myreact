// useLoginState.test.js

import { act, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useLoginState, handleSubmit } from './useLoginState';
import {MemoryRouter} from 'react-router-dom';
import { createMemoryHistory } from "history";
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

/*   test('вызов api', () => {  
  
    const { result } = renderHook(() => useLoginState(), {wrapper: MemoryRouter});   
   
    const email = 'test@login.com';   
    const password = '1111111';   

    act(() => {  
      result.current.handleSubmit()  
    })  

    act(() => {
      result.current.setEmail('smth')
    })

    act(() => {
      result.current.setPassword('111111')
    })

    act(() => {
      result.current.setError('error')
    })

    expect(userApi.login).toHaveBeenLastCalledWith(email, password)
    //expect(result.current.handleSubmit()).toBe('smth', '111111', 'error');

  }) */
  
/*   test('вызов роутера (push)', () => {
    const history = createMemoryHistory();

    expect(history.location.pathname).toBe("/chatpage");
  }) */

})