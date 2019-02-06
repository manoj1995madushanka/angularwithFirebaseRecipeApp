import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  private constructor(private http: Http, private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put('https://angular-recipe-book-b506e.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
}
