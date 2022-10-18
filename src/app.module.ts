import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddLiquidityModule } from './add-liquidity/add-liquidity.module';
import { RemoveLiquidityModule } from './remove-liquidity/remove-liquidity.module';

@Module({
  imports: [AddLiquidityModule, RemoveLiquidityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
