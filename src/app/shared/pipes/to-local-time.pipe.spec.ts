import { ToLocalTimePipe } from './to-local-time.pipe';

describe('ToLocalTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ToLocalTimePipe();
    expect(pipe).toBeTruthy();
  });
});
