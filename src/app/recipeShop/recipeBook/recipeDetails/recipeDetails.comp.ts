import { Component, Input } from "@angular/core";
import { Recipe } from '@recipe-shop-shared/models/recipe';
import { RecipeService } from '@recipe-shop-shared/services/recipe.service';
import { ShoppingListService } from '@recipe-shop-shared/services/shopping-list.service';
import { EventIngridient } from '@recipe-shop-shared/models/eventObjects';

@Component({
  selector: "recipeShop-recipeDetails-comp",
  templateUrl: "recipeDetails.html"
})

export class RecipeDetailsComp
{
  @Input() recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  )
  {
    this.recipeService.recipeSelected.subscribe
    (
      (recipe:Recipe) => this.recipe = recipe
    )
  }

  private onAddToShoppingList(): void
  {
    this.recipe.ingredients.forEach(element =>
    {
      this.shoppingListService.onIngridientEvent(new EventIngridient('add', element));
    });
  }
}
