import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()

export class RecipeService{
 
private recipes: Recipe[]=[
        new Recipe(
          'Big Mac',
        'just Awesome!',
        'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-big-mac-1:product-header-desktop?wid=829&hei=455&dpr=off',
        [
          new Ingredient('Meat',2),
      new Ingredient('French Fries',50)
    ]),
  
       new Recipe(
        'Chicken Royal',
       'Best Seller',
       'https://people.com/thmb/LJrv05igvulUWeDX-NqRNy3h1ns=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x377:961x379):format(webp)/chicken-big-mac-082222-85b1d856bf644217a9b539ea0a0fa2be.jpg'      
      ,[
      new Ingredient('chicken',2),
      new Ingredient('French Fries',50)
    ])
  ];
   
constructor(private shoppingListService:ShoppingListService){}
 
getRecipes(){
   return  this.recipes.slice();
}
getRecipe(id:number){
  return this.recipes[id];
}

addIngredientToShoppingList(ingredients:Ingredient[])
{
this.shoppingListService.addIngredients(ingredients);
}}