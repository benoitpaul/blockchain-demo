import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { NewBlockFormComponent } from './new-block-form/new-block-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BlockchainComponent,
    NewBlockFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
