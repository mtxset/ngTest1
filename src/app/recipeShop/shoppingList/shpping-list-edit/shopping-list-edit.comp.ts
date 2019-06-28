import { Component, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { Ingredient } from '@recipe-shop-shared/models/ingridient';
import { EventIngridient } from '@recipe-shop-shared/models/eventObjects';
import { ShoppingListService } from '@recipe-shop-shared/services/shopping-list.service';

@Component({
  selector: "recipeShop-shopping-list-edit-comp",
  templateUrl: "./shopping-list-edit.html"
})

export class ShoppingListEditComp
{
  @ViewChild('amountInputRef', {static: false}) amountInputRef: ElementRef;
  @ViewChild('nameInputRef', {static: false}) nameInputRef: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService
  )
  {

  }

  onIngClicked(eventType:string)
  {
    const temp = new Ingredient
    (
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );

    this.shoppingListService.onIngridientEvent( new EventIngridient(eventType, temp) );
  }
}
