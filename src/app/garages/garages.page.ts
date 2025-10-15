import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Data } from "../data";
import { addIcons } from "ionicons";
import { arrowForward, businessOutline } from "ionicons/icons";
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonToolbar,
} from "@ionic/angular/standalone";
@Component({
  selector: "app-garages",
  templateUrl: "./garages.page.html",
  styleUrls: ["./garages.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonList,
    IonCard,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonIcon,
  ],
})
export class GaragesPage implements OnInit {
  route = inject(ActivatedRoute);
  dataService = inject(Data);

  constructor() {
    addIcons({ arrowForward, businessOutline });
  }

  ngOnInit() {
    this.getGarage();
  }
  getGarage() {
    const id = this.route.snapshot.paramMap.get("id");
    this.dataService.getGarageByStates(id);
  }
}
