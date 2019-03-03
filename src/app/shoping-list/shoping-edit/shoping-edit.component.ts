import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import Ingredient from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  ingredient: Ingredient = {
    name: '',
    amount: null
  };
  @Output() onIngredientAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.onIngredientAdd.emit(this.ingredient);
  }

}
