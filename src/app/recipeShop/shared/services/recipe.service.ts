import { Recipe } from '@recipe-shop-shared/models/recipe';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '@recipe-shop-shared/models/ingridient';

export class RecipeService
{
  private _recipes: Recipe[] =
  [
    new Recipe('rcp0', 'rcpDesc0', 'https://www.fillmurray.com/640/360', [
      new Ingredient('Meat', 1),
      new Ingredient('Bread', 1)
    ]),

    new Recipe('rcp1', 'rcpDesc1', 'https://www.placecage.com/200/400',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Cheese', 5)
    ]),
    new Recipe('rcp2', 'rcpDesc2', 'https://www.placecage.com/400/400', []),
    new Recipe('rcp3', 'rcpDesc3', 'https://www.placecage.com/600/400', []),
  ];

  /**
   * Returns array containing all recipes
   *
   * @readonly
   * @type {Recipe[]}
   * @memberof RecipeService
   */
  public get recipes(): Recipe[]
  {
    return Object.assign([], this._recipes);
  }

  public recipeSelected = new EventEmitter<Recipe>();
}
