import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.singIn().then(
      () => {
        console.log('vs etes co');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['posts'])
        // redirection vers la page /posts
      }
    )
  }

  onSignOut(){
    this.authService.singOut();
    this.authStatus = this.authService.isAuth;
    console.log('vs etes deco');
  }

}
