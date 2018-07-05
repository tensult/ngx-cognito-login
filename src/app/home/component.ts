import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth';

/**
 * Container for security scans.
 */
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'component.html',
  styleUrls: ['component.scss']
})
export class HomeComponent implements OnInit {
  signedInUser: User;

  constructor(private authService: AuthService, private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser((err, currentSignedInUser) => {
      if (!currentSignedInUser || !currentSignedInUser.signedIn) {
        this.router.navigate(['/signin']);
      } else {
        this.signedInUser = currentSignedInUser;
      }
    });
  }
}
