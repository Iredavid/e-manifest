import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import{person} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, RouterModule],
})
export class HomePage {
  menuCtrl = inject(MenuController);

  constructor() {
    addIcons({person})
  }
  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }
}
