import Ingredient from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingService {
  newIngridient = new EventEmitter<Ingredient>();
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomotoes", 15)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngridient.emit(ingredient);
  }
}
