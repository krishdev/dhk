import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Kitchen } from "../models/kitchen";
 
@Injectable()
export class KitchenService {
   constructor(private http: Http) {
   }
 
   getAllKitchen(): Observable<Kitchen[]> {
      return this.http.get("http://krishdev.com/api/dhk/getAllKitchens")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}