import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RecipeShopComp } from "./recipeShop.comp";
import { ShoppingListComp } from './shoppingList/shoppingList.comp';
import { RecipeBookComp } from './recipeBook/recipeBook.comp';
import { HeaderComp } from './header/header.comp';
import { RecipeListComp } from './recipeBook/recipeList/recipeList.comp';
import { RecipeDetailsComp } from './recipeBook/recipeDetails/recipeDetails.comp';
import { RecipeItemComponent } from './recipeBook/recipe-item/recipe-item.component';
import { ShoppingListEditComp } from './shoppingList/shpping-list-edit/shopping-list-edit.comp';
import { DropdownDirective } from '@recipe-shop-shared/directives/dropdown.directive';
import { ShoppingListService } from '@recipe-shop-shared/services/shopping-list.service';
import { RecipeService } from '@recipe-shop-shared/services/recipe.service';


@NgModule({
  declarations:
  [
    RecipeShopComp,
    ShoppingListComp,
    ShoppingListEditComp,
    RecipeBookComp,
    RecipeListComp,
    RecipeDetailsComp,
    RecipeItemComponent,
    HeaderComp,

    DropdownDirective,
  ],
  exports:
  [
    RecipeShopComp
  ],
  imports:
  [
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers:
  [ShoppingListService, RecipeService],
  bootstrap: [RecipeShopComp]
})

export class RecipeShopMod {}
