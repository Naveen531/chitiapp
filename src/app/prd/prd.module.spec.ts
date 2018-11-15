import { PrdModule } from './prd.module';

describe('PrdModule', () => {
  let prdModule: PrdModule;

  beforeEach(() => {
    prdModule = new PrdModule();
  });

  it('should create an instance', () => {
    expect(prdModule).toBeTruthy();
  });
});
