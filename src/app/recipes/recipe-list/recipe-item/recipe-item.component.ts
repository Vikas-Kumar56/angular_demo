import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RecipeService } from "../../recipe.service";
import Recipe from "../../recipe.model";
import Ingredient from "src/app/shared/ingredient.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    ingridients: Ingredient[];
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelect() {
    this.recipeService.selectedRecipeEvent.emit(this.recipe);
  }
}
