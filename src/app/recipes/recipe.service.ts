import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Chop Suey',
      'Chop suey, also known as chop sui, is a simple, flavorful, and colorful dish with a light gravy-like sauce. The stir-fry is usually served with rice. The name "chop suey" means "miscellaneous pieces," referencing the variety of ingredients used.',
      35,
      353,
      'https://www.simplyrecipes.com/thmb/hWxkxQIOun9BlvHRJdKc79q3O9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chop-Suey-LEAD-04-7d9c6b894f714b5e8dc2c9b3aa3c4718.jpg',
      [
        new Ingredient('Chicken thighs', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Carrot', 2),
        new Ingredient('Oyster sauce', 1),
        new Ingredient('Mushroom', 4),
        new Ingredient('Celery', 2),
        new Ingredient('Bell pepper', 1),
        new Ingredient('Green onion', 1),
        new Ingredient('Garlic', 3)
      ]),
    new Recipe(
      'Chicken Salad with Tahini Dressing',
      'A quick weeknight salad with a refreshing crunch and savory sesame flavor, this recipe relies on rotisserie or leftover cooked chicken.',
      25,
      391,
      'https://www.simplyrecipes.com/thmb/wdQ5p4_FrAcF7Jmw62pu6lOUWdQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Weeknight-Chicken-Salad-Tahini-METHOD-5-00c229e99ae744c8a61a655364e37f45.jpg',
      [
        new Ingredient('Scallion', 2),
        new Ingredient('Daikon radish', 1),
        new Ingredient('Romaine lettuce', 1),
        new Ingredient('Cucumber', 1),
        new Ingredient('Shredded cooked chicken', 1),
        new Ingredient('Butter', 1),
        new Ingredient('Tahini', 1)
      ]),
    new Recipe(
      'Korean Corn Cheese',
      'Corn cheese is exactly what it sounds like: corn and cheese. The two are mixed with a bit of mayo to create a creamy, cheesy, and crunchy side dish.',
      25,
      315,
      'https://www.simplyrecipes.com/thmb/7m5cRnGTgfF4-y4GM6HDFg0afHo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Corn-Cheese-LEAD-2-7a5306e3cb764c13931e00b4048490e6.jpg',
      [
        new Ingredient('Corn', 4),
        new Ingredient('Parmesan cheese', 1),
        new Ingredient('Green onion', 3),
        new Ingredient('Mayonnaise', 1),
        new Ingredient('Mozzarella cheese', 1),
        new Ingredient('Butter', 1),
      ]),
    new Recipe('Lemony Sardine Pasta',
      'The mild, briny flavor of sardines is complemented by tangy, sweet caramelized lemons and buttery Castelvetrano olives. Garlic and red chili flakes sauté in oil, and the aglio e olio-like base.',
      35,
      450,
      'https://www.simplyrecipes.com/thmb/MlNjRMS0HqSxHKObnVmqOa4zizw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Lemony-Sardine-Pasta-LEAD-2-84a430d124c84f6a97f9f7437de10077.jpg',
      [
        new Ingredient('Lemon', 2),
        new Ingredient('Pasta', 1),
        new Ingredient('Sardine', 1),
        new Ingredient('Olive', 1),
        new Ingredient('Garlic', 4),
      ]),
      new Recipe('Cucumber, Peach, and Basil Salad',
      'Cool, crunchy cucumbers combined with sweet, juicy peaches and dressed in a peppery basil vinaigrette. This refreshing salad is easy to make and goes great with grilled meat',
      15,
      133,
      'https://www.simplyrecipes.com/thmb/DyY8KYXBS6cfy3cXY_6UJlwFHrY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__07__Peach-Cucumber-Salad-LEAD-03-66cbbc47ddcb47b0aa4210d0dee2d12e.jpg',
      [
        new Ingredient('Cucumber', 1),
        new Ingredient('Peach', 2),
        new Ingredient('Lime', 1),
        new Ingredient('Olive oil', 1),
        new Ingredient('Basil', 4),
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
