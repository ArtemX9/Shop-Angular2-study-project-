import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  onProductsShow() {
    this.router.navigate(['/products']);
  }

  onCartShow() {
    this.router.navigate(['/cart/overview']);
  }

  onAdminShow() {
    this.router.navigate(['/admin']);
  }

  onLoginShow() {
    this.router.navigate(['/login']);
  }
}
