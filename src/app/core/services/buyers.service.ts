import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Buyers } from '../models/buyers';

@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  private _url: string = environment.baseUrl+"/buyers";
  buyer!: Buyers;

  constructor( private http: HttpClient) { }

  getBuyers(): Observable<Buyers[]>{

    return this.http.get<Buyers[]>(this._url);

  }

  getBuyer(buyerId: number): Observable<Buyers>{
    let id = buyerId.toString();
    return this.http.get<Buyers>(this._url+"/"+`${id}`);
  }

}
