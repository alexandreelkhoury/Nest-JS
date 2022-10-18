import { Injectable } from '@nestjs/common';
import { ABIPancakeRouter } from 'src/ABI';
import { Liquidity } from 'src/dto/liquidity.tdo';
var Web3 = require('web3');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider(`${process.env.MNEMONIC}`, `https://slf2xzgkuz8q.grandmoralis.com:2053/server`);
var web3 = new Web3(provider);
const contractAddressPancakeRouter = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const contract = new web3.eth.Contract(ABIPancakeRouter, contractAddressPancakeRouter);

@Injectable()
export class RemoveLiquidityService {

    message = "liquidity removed";

    getMessage(): string {
        return this.message;
    }

    async removeLiquidity(liquidity: Liquidity) {
        await contract.methods.removeLiquidity(liquidity).send({ from: '' })
    }
}
