import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public duration: number;
  public calories: number;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, duration: number, calories: number, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.duration = duration;
    this.calories = calories;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
