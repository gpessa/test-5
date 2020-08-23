import useMonster, { UseMonster } from '.';
import {
  renderHook,
  act,
  RenderHookResult,
} from '@testing-library/react-hooks';

import classifierService from '../../services/classifier-service';
import photoService from '../../services/photo-service';

jest.mock('../../services/classifier-service', () =>
  jest.fn().mockResolvedValue('Gaetano'),
);
jest.mock('../../services/photo-service', () =>
  jest.fn().mockResolvedValue(['www.babbo.com']),
);

describe('useMonster', () => {
  let hook: RenderHookResult<unknown, UseMonster>;

  const file = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
  });

  beforeEach(() => {
    hook = renderHook(() => useMonster());
  });

  test('Initial state is upload', () => {
    expect(hook.result.current.step).toBe(`upload`);
  });

  test('Ensure image preview is stores when image is uploaded', () => {
    act(() => {
      hook.result.current.setImage(file);
    });
    expect(hook.result.current.preview).toBe(`blob://${file.name}`);
    expect(hook.result.current.step).toBe(`preview`);
  });

  test('services are called when user searchPictures', async () => {
    act(() => {
      hook.result.current.setImage(file);
    });

    act(() => {
      hook.result.current.searchPictures();
    });

    expect(classifierService).toHaveBeenCalledWith('blob://foo.txt');

    await hook.waitForNextUpdate();

    expect(photoService).toHaveBeenCalledWith('Gaetano');

    expect(hook.result.current.step).toBe('result');
    expect(hook.result.current.results).toStrictEqual(['www.babbo.com']);
  });

  test('Ensure reset clean preview ans set back step to upload', () => {
    act(() => {
      hook.result.current.setImage(file);
      hook.result.current.reset();
    });
    expect(hook.result.current.preview).toBeUndefined();
    expect(hook.result.current.step).toBe(`upload`);
  });
});
