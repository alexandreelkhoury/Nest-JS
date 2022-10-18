import { Module } from '@nestjs/common';
import { AddLiquidityController } from './add-liquidity.controller';
import { AddLiquidityService } from './add-liquidity.service';

@Module({
    controllers: [AddLiquidityController],
    providers: [AddLiquidityService]
})
export class AddLiquidityModule { }
