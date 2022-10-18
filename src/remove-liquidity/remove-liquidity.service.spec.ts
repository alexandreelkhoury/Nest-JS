import { Test, TestingModule } from '@nestjs/testing';
import { RemoveLiquidityService } from './remove-liquidity.service';

describe('RemoveLiquidityService', () => {
  let service: RemoveLiquidityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveLiquidityService],
    }).compile();

    service = module.get<RemoveLiquidityService>(RemoveLiquidityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
