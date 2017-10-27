import { Injectable } from '@angular/core';
import { Block } from './block';
import { Blockchain } from './blockchain';
import { BlockchainHashCalculatorService } from './blockchain-hash-calculator.service';

@Injectable()
export class BlockchainValidatorService {

  constructor(private hashCalculator: BlockchainHashCalculatorService) { }

  isValidChain(blockchainToValidate) {
    /*
    if (JSON.stringify(blockchainToValidate[0]) !== JSON.stringify(this.getGenesisBlock())) {
      return false;
    }
    */
    var tempBlocks = [blockchainToValidate[0]];
    for (var i = 1; i < blockchainToValidate.length; i++) {
      if (this.isNewBlockValid(blockchainToValidate[i], tempBlocks[i - 1])) {
        tempBlocks.push(blockchainToValidate[i]);
      } else {
        return false;
      }
    }
    return true;
  }

  isNewBlockValid(newBlock, previousBlock) {
    if (previousBlock.index + 1 !== newBlock.index) {
      console.log('invalid index');
      return false;
    } else if (previousBlock.hash !== newBlock.previousHash) {
      console.log('invalid previoushash');
      return false;
    } else if (this.hashCalculator.calculateHashForBlock(newBlock) !== newBlock.hash) {
      console.log('invalid hash: ' + this.hashCalculator.calculateHashForBlock(newBlock) + ' ' + newBlock.hash);
      return false;
    }
    return true;
  };

}
