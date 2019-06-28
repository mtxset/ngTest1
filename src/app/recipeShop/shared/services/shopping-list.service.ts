import { Ingredient } from '@recipe-shop-shared/models/ingridient';
import { EventIngridient } from '@recipe-shop-shared/models/eventObjects';
import { EventEmitter } from '@angular/core';

export class ShoppingListService
{

  private _ingridients: Ingredient[] =
  [
    new Ingredient("ing0", 54),
    new Ingredient("ing1", 123),
    new Ingredient("ing2", 4),
    new Ingredient("ing3", 3),
  ];

  public get ingridients() : Ingredient[]
  {
    return Object.assign([], this._ingridients);
  }

  private addIngridient(item: Ingredient)
  {
    this._ingridients.push(item);
  }

  private removeFirst()
  {
    this._ingridients.splice(0, 1);
  }

  private clearList()
  {
    this._ingridients = [];
  }

  public onIngridientEvent(data: EventIngridient)
  {
    if (data.eventType === "add")
      this.addIngridient(data.ing);
    else if (data.eventType === 'remove')
      this.removeFirst();
    else if (data.eventType === 'clear')
      this.clearList();

    this.onChange.emit();
  }

  public onChange = new EventEmitter< any >();
}
