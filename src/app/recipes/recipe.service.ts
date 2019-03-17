import Recipe from "./recipe.model";
import { EventEmitter } from "@angular/core";
import Ingredient from "../shared/ingredient.model";

export class RecipeService {
  selectedRecipeEvent = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "A Simple Recipe Test",
      "https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe.jpg",
      [new Ingredient("meat", 12), new Ingredient("buns", 2)]
    ),
    new Recipe(
      "A another Test Recipe",
      "A Simple Recipe Test",
      "https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe.jpg",
      [new Ingredient("meat", 12), new Ingredient("chease", 12)]
    )
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
