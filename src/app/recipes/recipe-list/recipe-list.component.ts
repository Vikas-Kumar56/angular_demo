import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A Simple Recipe Test', 'https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe.jpg'),
    new Recipe('A another Test Recipe', 'A Simple Recipe Test', 'https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
