import * as mobilenet from '@tensorflow-models/mobilenet';
import classifierService from './classifier-service';

describe('classifierService', () => {
  const loadMethod = jest.spyOn(mobilenet, 'load');

  afterEach(() => {
    jest.clearAllMocks();
  })
  
  test('Model should be loaded', () => {
    classifierService('dasda')
    expect(loadMethod).toBeCalled();
  });

});
