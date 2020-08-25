import { reducer, actions, initialState } from '.';
import useDog from './hook';
import { renderHook, act, HookResult, WaitOptions, RenderHookResult } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import store from '../index'
import React from 'react';

import classifierService from '../../services/classifier-service';
import photoService from '../../services/photos-service';

jest.mock('../../services/classifier-service', () =>
  jest.fn().mockResolvedValue('Gaetano'),
);

jest.mock('../../services/photos-service', () =>
  jest.fn().mockResolvedValue(['www.babbo.com']),
);


describe('dog slice', () => {
  describe('reducer, actions and selectors', () => {
    const payload = new File(['foo'], 'bamba.txt', {
      type: 'text/plain',
    });
    

    it('should return the upload step when initialized', () => {      
      const hook = renderHook(() => useDog(), {
        wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
      });
      expect(hook.result.current.step).toBe('upload');
    });


    it("should set the image in the preview state and the current step", () => {
      const hook = renderHook(() => useDog(), {
        wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
      });

      act(() => {
        hook.result.current.setImage(payload)
      })

      expect(hook.result.current.step).toBe('preview');
    });


    it("Check on search image, service are being called", async () => {
      const hook = renderHook(() => useDog(), {
        wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
      });

      act(() => {
        hook.result.current.setImage(payload);
        hook.result.current.searchPictures();
      });

      await hook.waitForValueToChange(() => hook.result.current.results);

      expect(classifierService).toHaveBeenCalledWith('blob://bamba.txt');
      expect(photoService).toHaveBeenCalledWith('Gaetano');
    });


    it("After an image search, results and step should be updated", async () => {
      const hook = renderHook(() => useDog(), {
        wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
      });

      act(() => {
        hook.result.current.setImage(payload);
      });

      act(() => {
        hook.result.current.searchPictures();
      });

      await hook.waitForValueToChange(() => hook.result.current.results);

      expect(hook.result.current.results).toStrictEqual(['www.babbo.com']);
      expect(hook.result.current.step).toStrictEqual('results');
    });
  })
})
