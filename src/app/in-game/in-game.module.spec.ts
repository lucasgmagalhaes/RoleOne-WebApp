import { InGameModule } from './in-game.module';

describe('InGameModule', () => {
  let inGameModule: InGameModule;

  beforeEach(() => {
    inGameModule = new InGameModule();
  });

  it('should create an instance', () => {
    expect(inGameModule).toBeTruthy();
  });
});
