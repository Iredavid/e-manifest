import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../data';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {  arrowForwardOutline, caretBack } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.page.html',
  styleUrls: ['./states.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StatesPage implements OnInit {
  dataService = inject(Data);
  router=inject(Router)
  constructor() {
    addIcons({caretBack,arrowForwardOutline})
   }

  async ngOnInit() {
    await this.dataService.getStates()
    // console.log(this.dataService.states);
    
  }
  goToGarages(id:any){
    this.router.navigate(['states/garages',id])
  }
}
