import Ingredient from "../shared/ingredient.model";

export default class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingridients: Ingredient[];

  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    ingridients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingridients = ingridients;
  }
}
