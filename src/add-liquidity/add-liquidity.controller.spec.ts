import { Test, TestingModule } from '@nestjs/testing';
import { AddLiquidityController } from './add-liquidity.controller';

describe('AddLiquidityController', () => {
  let controller: AddLiquidityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddLiquidityController],
    }).compile();

    controller = module.get<AddLiquidityController>(AddLiquidityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
