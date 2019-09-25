import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private autoService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.autoService.login(this.model).subscribe(next => {
      console.log('Logged in successfuly');
    }, error => {
      console.log(error);
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  loggedOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
