import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Observable<Contact>> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    // this.msgService.setLoading(true)
    return this.contactService.getById(id)
    // .pipe(
    // catchError(err => this.msgService.sendAlert(err))
    // )
  }
}
