import { Component, OnInit, Input } from '@angular/core';
import { Blockchain } from '../blockchain';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  @Input() blockchain : Blockchain;

  constructor() { }

  ngOnInit() {
  }

}
