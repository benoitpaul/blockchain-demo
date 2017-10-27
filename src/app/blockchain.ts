import { Injectable } from '@angular/core';
import { Block } from './block';
import { BlockchainHashCalculatorService } from './blockchain-hash-calculator.service';
import { BlockchainValidatorService } from './blockchain-validator.service';

export class Blockchain {
  blocks = [];

  constructor(private hashCalculator: BlockchainHashCalculatorService,
    private validator: BlockchainValidatorService) {
    this.blocks.push(this.getGenesisBlock());
  }

  generateNextBlock(blockData) {
    const previousBlock = this.getLatestBlock();
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextHash = this.hashCalculator.calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData);
    return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash);
  };

  addBlock(newBlock) {
    if (this.validator.isNewBlockValid(newBlock, this.getLatestBlock())) {
      this.blocks.push(newBlock);
    }
  }

  replaceChain = (newBlocks) => {
    if (this.validator.isValidChain(newBlocks) && newBlocks.length > this.blocks.length) {
      console.log('Received blockchain is valid. Replacing current blockchain with received blockchain');
      this.blocks = newBlocks;
      this.broadcast(this.responseLatestMsg());
    } else {
      console.log('Received blockchain invalid');
    }
  }

  getLatestBlock() {
    return this.blocks[this.blocks.length - 1];
  }

  getGenesisBlock() {
    const nextIndex = 0;
    const previousHash = "0";
    const nextTimestamp = new Date().getTime() / 1000;
    const blockData = "genesis";
    var nextHash = this.hashCalculator.calculateHash(nextIndex, previousHash, nextTimestamp, blockData);
    return new Block(0,
      "0",
      nextTimestamp,
      "genesis",
      nextHash);
  }

  broadcast(message: any) {
    console.log('to-do');
  }

  responseLatestMsg() {
    return {
      //'type': MessageType.RESPONSE_BLOCKCHAIN,
      'data': JSON.stringify([this.getLatestBlock()])
    };
  }
}
