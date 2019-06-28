import { Ingredient } from '@recipe-shop-shared/models/ingridient';

export class EventIngridient
{
  constructor(
    public eventType: string,
    public ing: Ingredient)
  { }
}
