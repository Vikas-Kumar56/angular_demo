import { Component, OnInit, Input } from "@angular/core";
import Recipe from "../recipe.model";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.recipe = this.recipeService.getRecipe(+param["id"]);
    });
  }
}
