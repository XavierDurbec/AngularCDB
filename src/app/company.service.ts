import {Injectable} from '@angular/core';
import {Company} from './model/company';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';

@Injectable()
export class CompanyService {
  private url = 'webapp';
  private companyurl = 'ebapp/company';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost:8080/webapp/companies');
  }

  getCompany(id: number): Observable<Company> {
    this.messageService.add(`Company Service: fetched company id=${id}`);
    return this.http.get<Company>(`http://localhost:8080/webapp/company/${id}`);
  }


  /*Injectable()
export class RecipeService {
  private recipeUrl = 'api/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
  }
  addRecipe(recipe: Recipe): Observable<void> {
    return this.http.post<void>(this.recipeUrl, recipe);
  }
  deleteRecipe(recipe: Recipe): Observable<void> {
    return this.http.delete<void>(`${this.recipeUrl}/${recipe.id}`);
  }*/
}
