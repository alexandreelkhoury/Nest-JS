import { Test, TestingModule } from '@nestjs/testing';
import { AddLiquidityService } from './add-liquidity.service';

describe('AddLiquidityService', () => {
  let service: AddLiquidityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddLiquidityService],
    }).compile();

    service = module.get<AddLiquidityService>(AddLiquidityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
