import Ingredient from "../shared/ingredient.model";

export default class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingridients: Ingredient[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingridients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingridients = ingridients;
  }
}
