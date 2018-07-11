import { ArchitectureModule } from './architecture.module';

describe('ArchitectureModule', () => {
  let architectureModule: ArchitectureModule;

  beforeEach(() => {
    architectureModule = new ArchitectureModule();
  });

  it('should create an instance', () => {
    expect(architectureModule).toBeTruthy();
  });
});
