import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  title: string = null;
  contact: Contact = null;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (!Object.keys(data).length) {
        this.contact = this.contactService.getEmptyContact()
      } else {
        this.contact = data.contact
      }
    })
    this.title = this.contact._id ? 'Edit Contact' : 'Add Contact';
  }

  onSaveContact() {
    this.contactService.save(this.contact)
    this.router.navigateByUrl('/contact')
  }

  goBack() {
    this.location.back();
  }
}
