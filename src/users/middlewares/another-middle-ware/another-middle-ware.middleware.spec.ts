import { AnotherMiddleWareMiddleware } from './another-middle-ware.middleware';

describe('AnotherMiddleWareMiddleware', () => {
  it('should be defined', () => {
    expect(new AnotherMiddleWareMiddleware()).toBeDefined();
  });
});
