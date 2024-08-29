import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrl: './conditionals.component.scss'
})
export class ConditionalsComponent {
  isTrue = false; // or false based on your logic
  imageCondition = 'image1'; // or 'image2', or any other condition

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  sortedItems = [];
}
