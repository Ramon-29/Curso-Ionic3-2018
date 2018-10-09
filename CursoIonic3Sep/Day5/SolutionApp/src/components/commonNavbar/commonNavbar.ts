import { Component, Input } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'common-navbar',
  templateUrl: 'commonNavbar.html'
})
export class CommonNavbarComponent {

  @Input() title: string;

  constructor(private menuCtrl: MenuController) {

  }

  toggleMenu() {

    this.menuCtrl.toggle();
  }
}
