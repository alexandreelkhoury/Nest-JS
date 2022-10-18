import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddLiquidityService } from './add-liquidity.service';

//localhost:3000/add-liquidity
@Controller('add-liquidity')
export class AddLiquidityController {
    constructor(private readonly addLiquidityService: AddLiquidityService) { }

    @Get()
    getMessage(): string {
        return this.addLiquidityService.getMessage();
    }

    // @Post() 
    // addLiquidity(@Body()) {
    //     return this.addLiquidityService.addLiquidity();
    // }

}
