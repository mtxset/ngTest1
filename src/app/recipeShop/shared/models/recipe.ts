import { Ingredient } from './ingridient';

export class Recipe
{
  constructor(
    public name: string,
    public desc:string,
    public imgURL: string,
    public ingredients: Ingredient[])
  { }
}
