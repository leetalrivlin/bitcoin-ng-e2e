import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  user: User;
  subscription: Subscription;

  constructor(private contactService: ContactService, private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    const user = await this.userService.getLogedinUser();
    this.user = user;
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact;
    })
  }

  onRemoveContact() {
    this.contactService.remove(this.contact._id);
    this.router.navigateByUrl('contact')
  }

  async onTransferCoins(amount) {
    this.user = await this.userService.addMove(this.contact, amount);
    this.getContactMoves();
  }

  getContactMoves() {
    const contactMoves = this.user.moves.filter(
      (move) => move.toId === this.contact._id
    );
    return contactMoves;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
