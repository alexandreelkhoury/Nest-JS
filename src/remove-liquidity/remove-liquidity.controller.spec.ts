import { Test, TestingModule } from '@nestjs/testing';
import { RemoveLiquidityController } from './remove-liquidity.controller';

describe('RemoveLiquidityController', () => {
  let controller: RemoveLiquidityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveLiquidityController],
    }).compile();

    controller = module.get<RemoveLiquidityController>(RemoveLiquidityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
