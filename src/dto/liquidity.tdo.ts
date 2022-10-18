export class Liquidity {
    readonly tokenA: string;
    readonly tokenB: string;
    readonly amountADesired: number;
    readonly amountBDesired: number;
    readonly amountAmin: number;
    readonly amountBmin: number;
    readonly to: string;
    readonly deadline: number;
}