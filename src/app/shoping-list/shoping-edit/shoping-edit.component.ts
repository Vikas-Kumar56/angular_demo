import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import Ingredient from "../../shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
  selector: "app-shoping-edit",
  templateUrl: "./shoping-edit.component.html",
  styleUrls: ["./shoping-edit.component.css"]
})
export class ShopingEditComponent implements OnInit {
  ingredient: Ingredient = {
    name: "",
    amount: null
  };

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  onAddIngredient() {
    this.shoppingService.addIngredient(this.ingredient);
  }
}
