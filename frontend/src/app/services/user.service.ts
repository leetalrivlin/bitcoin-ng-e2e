import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Contact } from '../models/contact';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: StorageService) {}

  private STORAGE_KEY = 'user';

  private gDefaultUsers: User[] = [
    {
      _id: 'u101',
      name: 'Leetal Rivlin-Tal',
      coins: 100,
      moves: [
        {
          toId: '5a566402a6499c1d4da9220a',
          to: 'Shana Pope',
          at: 1618000904490,
          amount: 20,
        },
        {
          toId: '5a56640269f443a5d64b32ca',
          to: 'Ochoa Hyde',
          at: 1618000904390,
          amount: 4,
        },
        {
          toId: '5a5664025f6ae9aa24a99fde',
          to: 'Hallie Mclean',
          at: 1618000904190,
          amount: 18,
        },
      ],
    },
  ];

  public async getLogedinUser() {
    var user = JSON.parse(sessionStorage.getItem('loggedinUser'));
    if (!user) {
      user = _saveLocalUser(this.gDefaultUsers[0]);
    }
    return user;
  }

  public async getUserById(id: string) {
    try {
      const user = await this.storageService.get(this.STORAGE_KEY, id);
      return user;
    } catch (err) {
      console.log('cant get user', err);
    }
  }

  public async signup(name: string) {
    const user = {
      name,
      coins: 100,
      moves: [],
    };
    try {
      const savedUser = await this.storageService.post(this.STORAGE_KEY, user);
      _saveLocalUser(savedUser);
      return savedUser;
    } catch (err) {
      console.log('cant save user', err);
    }
  }

  public async addMove(contact: Contact, amount: number) {
    const move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    };
    try {
      const loggedUser = await this.getLogedinUser();
      loggedUser.coins -= amount;
      loggedUser.moves.unshift(move);
      const updatedUser = await this.storageService.put(this.STORAGE_KEY, loggedUser);
      _saveLocalUser(updatedUser);
      return updatedUser;
    } catch (err) {
      console.log('cant save move', err);
    }
  }

  private _loadUsers() {
    var users = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    if (!users || !users.length) {
      users = this.gDefaultUsers;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    }
    return users;
  }
}

function _saveLocalUser(user: User) {
  sessionStorage.setItem('loggedinUser', JSON.stringify(user));
  return user;
}
