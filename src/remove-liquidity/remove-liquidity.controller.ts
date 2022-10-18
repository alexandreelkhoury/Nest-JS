import { Body, Controller, Get, Post } from '@nestjs/common';
import { Liquidity } from 'src/dto/liquidity.tdo';
import { RemoveLiquidityService } from './remove-liquidity.service';

@Controller('remove-liquidity')
export class RemoveLiquidityController {
    constructor(private readonly removeLiquidityService: RemoveLiquidityService) { }

    @Get()
    getMessage(): string {
        return this.removeLiquidityService.getMessage();
    }

    @Post()
    removeLiquidity(@Body() liquidity: Liquidity) {
        return this.removeLiquidityService.removeLiquidity(liquidity);
    }
}
