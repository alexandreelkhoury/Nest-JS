import { Module } from '@nestjs/common';
import { RemoveLiquidityController } from './remove-liquidity.controller';
import { RemoveLiquidityService } from './remove-liquidity.service';

@Module({
  controllers: [RemoveLiquidityController],
  providers: [RemoveLiquidityService]
})
export class RemoveLiquidityModule {}
