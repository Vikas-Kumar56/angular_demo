import { Component, OnInit } from "@angular/core";
import Recipe from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipeEvent.subscribe(recipe => {
      this.selectedRecipe = recipe;
    });
  }
}
