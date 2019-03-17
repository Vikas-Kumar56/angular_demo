import { Component, OnInit } from "@angular/core";
import Ingredient from "../shared/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Component({
  selector: "app-shoping-list",
  templateUrl: "./shoping-list.component.html",
  styleUrls: ["./shoping-list.component.css"]
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.newIngridient.subscribe(ingredient => {
      this.ingredients.push(ingredient);
    });
  }
}
