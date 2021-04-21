import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  @Output() transferCoins= new EventEmitter();
  amount:number = null;

  constructor() { }

  onTransferCoins(ev) {
    ev.preventDefault();
    this.transferCoins.emit(this.amount);
    this.amount = null;
  }

  ngOnInit(): void {

  }

}
