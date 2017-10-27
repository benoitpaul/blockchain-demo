import { Injectable } from '@angular/core';
import { BlockchainHashCalculatorService } from './blockchain-hash-calculator.service';
import { BlockchainValidatorService } from './blockchain-validator.service';
import { Blockchain } from './blockchain';

@Injectable()
export class BlockchainFactoryService {

  constructor(private hashCalculator: BlockchainHashCalculatorService,
    private validator: BlockchainValidatorService) {

  }

  createBlockchain() {
    return new Blockchain(this.hashCalculator, this.validator);
  }
}
