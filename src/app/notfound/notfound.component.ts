import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredLocationList = this.housingLocationList;
  //     return;
  //   }
  
  //   this.filteredLocationList = this.housingLocationList.filter(
  //     housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  //   );
  // }

}
