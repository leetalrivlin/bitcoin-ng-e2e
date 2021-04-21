import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  public filterBy
  private subscription: Subscription

  constructor(private contactService: ContactService) { }

  onSetFilter() {
    this.contactService.setFilter(this.filterBy)
  }

  ngOnInit(): void {
    this.subscription = this.contactService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
