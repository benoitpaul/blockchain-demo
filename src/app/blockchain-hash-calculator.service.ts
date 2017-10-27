import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable()
export class BlockchainHashCalculatorService {

  constructor() { }

  calculateHash(index, previousHash, timestamp, data) {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  }

  calculateHashForBlock(block) {
    return this.calculateHash(block.index, block.previousHash, block.timestamp, block.data);
  }
}
