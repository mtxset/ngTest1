import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '@recipe-shop-shared/models/recipe';

@Component({
  selector: 'recipeShop-recipe-item-comp',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() item: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
