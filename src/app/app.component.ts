import { Component } from '@angular/core';
import { BlockchainHashCalculatorService } from './blockchain-hash-calculator.service';
import { BlockchainValidatorService } from './blockchain-validator.service';
import { BlockchainFactoryService } from './blockchain-factory.service';
import { Blockchain } from './blockchain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BlockchainHashCalculatorService,
    BlockchainValidatorService,
    BlockchainFactoryService]
})
export class AppComponent {
  title = 'app';
  blockchain: Blockchain;

  constructor(private factory: BlockchainFactoryService) {
    this.blockchain = this.factory.createBlockchain();
  }
}
