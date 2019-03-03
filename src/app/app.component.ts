import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  selectedValue: string = 'recipe';
  onSelected(selectedValue: string) {
    this.selectedValue = selectedValue;
  }


}
