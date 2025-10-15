import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Data {
  states: any[] = []
  db=inject(Firestore)
  garages: any[]=[]

  async getStates() {
    this.states.length=0
    const stateRef = collection(this.db, 'states');
    const stateSnapshot = await getDocs(stateRef);
    stateSnapshot.forEach((doc) => {
      this.states.push(doc.data());
    })
  }
  async getGarageByStates(id:any){
    this.garages.length=0
  const querySnapshot = await getDocs(collection(this.db, "states", id, "garages"));
  querySnapshot.docs.map((doc) => {
    this.garages.push(doc.data());
});
// console.log(this.garages);

}
}
