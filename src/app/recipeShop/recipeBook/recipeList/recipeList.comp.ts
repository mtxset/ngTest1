import { Component, OnInit, Output } from "@angular/core";
import { Recipe } from "@recipe-shop-shared/models/recipe";
import { RecipeService } from '@recipe-shop-shared/services/recipe.service';

@Component({
  selector:"recipeShop-recipeList-comp",
  templateUrl: "recipeList.html"
})

export class RecipeListComp implements OnInit
{
  @Output() recipe:Recipe;

  recipes:Recipe[];

  constructor(
    private recipeService: RecipeService
  )
  {

  }

  onRecipeClick(item:Recipe)
  {
    this.recipeService.recipeSelected.emit(item);
  }

  ngOnInit()
  {
    this.recipes = this.recipeService.recipes;
  }
}
