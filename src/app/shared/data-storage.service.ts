import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DataStorageService {
  private constructor(http: Http, private RecipeService) {

  }

  storeRecipes() {
    this.http.push();
  }
}
