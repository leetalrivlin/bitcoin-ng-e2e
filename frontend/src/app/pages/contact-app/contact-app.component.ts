import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  // contacts: Contact[]

  contacts$: Observable<Contact[]>
  selectedContactId: string
  isShowEdit: boolean = false
  // subscription: Subscription

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // Before using the async pipe:
    // this.subscription = this.contactService.contacts$.subscribe(contacts => {
    //   this.contacts = contacts
    // })
    this.contactService.query()
    this.contacts$ = this.contactService.contacts$
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }
}
