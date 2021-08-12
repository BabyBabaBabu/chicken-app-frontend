import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sellers } from '../models/sellers';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  private _url: string = environment.baseUrl+"/sellers";
  seller!: Sellers;

  constructor( private http: HttpClient) { }

  getSellers(): Observable<Sellers[]>{

    return this.http.get<Sellers[]>(this._url);
  
  }

  getSeller(sellerId: number): Observable<Sellers>{
    let id = sellerId.toString();
    return this.http.get<Sellers>(this._url+"/"+`${id}`);
  }

}
