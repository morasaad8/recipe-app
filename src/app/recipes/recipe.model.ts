import { Ingredient } from "../shared/ingredient.model";


export class Recipe {
[x: string]: any;
  public name: string; 
  public description: string;
  public imagePath: string;
  public Ingredient: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredient:Ingredient[]){
    this.description=description;
    this.name=name;
    this.imagePath=imagePath;
    this.Ingredient= ingredient;
  }
}