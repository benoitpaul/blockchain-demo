import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-block-form',
  templateUrl: './new-block-form.component.html',
  styleUrls: ['./new-block-form.component.css']
})
export class NewBlockFormComponent implements OnInit {

  @Output() newBlock: EventEmitter<any> = new EventEmitter();  

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.newBlock.emit(form.value.data);
  }
}
