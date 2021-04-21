import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;
  rate: any;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  getContactMoves() {
    return this.user.moves.slice(0, 3);
  }

  async ngOnInit() {
    this.user = await this.userService.getLogedinUser();
    this.rate = this.bitcoinService.getRate(this.user.coins).then((rate) => {
      this.rate = rate;
    });
  }
}
