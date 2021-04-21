import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userName: string;

  constructor(private userService: UserService, private router: Router) { }

  onSaveUser() {
    this.userService.signup(this.userName);
    this.router.navigateByUrl('/contact');
  }

  ngOnInit(): void {
  }

}
