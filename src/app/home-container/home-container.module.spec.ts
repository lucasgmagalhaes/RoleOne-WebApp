import { HomeContainerModule } from './home-container.module';

describe('HomeContainerModule', () => {
  let homeContainerModule: HomeContainerModule;

  beforeEach(() => {
    homeContainerModule = new HomeContainerModule();
  });

  it('should create an instance', () => {
    expect(homeContainerModule).toBeTruthy();
  });
});
