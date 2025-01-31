import {Injectable} from '@angular/core';
import {CLIENTS} from '../data/clients';
import {filter, map, Observable, of, tap} from 'rxjs';
import {CONTACTS} from '../data/contacts';
import {ACCOUNTS} from '../data/accounts';
import { Account, Client, Contact } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  list(): Observable<Client[]> {
    return of(CLIENTS);
  }

  getContact(clientId: string): Observable<Contact> {
    return of(CONTACTS).pipe(
      map(contacts => contacts.find(({userId}) => userId === clientId)),
      filter((contact): contact is Contact => !!contact)
    );
  }

  getAccounts(clientIds: string[]): Observable<Account[]> {
    return of(ACCOUNTS).pipe(
      map(accounts => accounts.filter(({userId}) => clientIds.includes(userId)))
    );
  }

}
