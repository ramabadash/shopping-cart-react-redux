import mainReducer from './mainReducer';
import { primaryState } from './mainReducer';

describe('main reducer', () => {
  it('should handle initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(primaryState);
  });
});
