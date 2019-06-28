import { Component, OnInit } from "@angular/core";
import { Ingredient } from '@recipe-shop-shared/models/ingridient';
import { ShoppingListService } from '@recipe-shop-shared/services/shopping-list.service';
import { EventIngridient } from '@recipe-shop-shared/models/eventObjects';

@Component({
  selector: "recipeShop-shoppingList-comp",
  templateUrl: "shoppingList.html"
})

export class ShoppingListComp implements OnInit
{
  private ingridients: Ingredient[];

  ngOnInit(): void
  {
    this.ingridients = this.shoppingListService.ingridients;
  }

  constructor(
    private shoppingListService: ShoppingListService
  )
  {
    this.shoppingListService.onChange.subscribe
    (
      (params: any) => this.handleOnChange(params)
    )
  }

  private handleOnChange(params: any)
  {
    this.ingridients = this.shoppingListService.ingridients;
  }
}
