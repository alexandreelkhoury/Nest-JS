import { Injectable } from '@nestjs/common';
import { ABIPancakeRouter } from 'src/ABI';
import { Liquidity } from 'src/dto/liquidity.tdo';

const Web3 = require('web3');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider(`${process.env.MNEMONIC}`, `https://slf2xzgkuz8q.grandmoralis.com:2053/server`);
const web3 = new Web3(provider);
const contractAddressPancakeRouter = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const contract = new web3.eth.Contract(ABIPancakeRouter, contractAddressPancakeRouter);


@Injectable()
export class AddLiquidityService {
    message = "Liquidity Added !!!";

    getMessage(): string {
        return this.message;
    }

    async addLiquidity(liquidity: Liquidity) {
        await contract.methods.addLiquidity(liquidity).send({ from: '' })
    }
}
