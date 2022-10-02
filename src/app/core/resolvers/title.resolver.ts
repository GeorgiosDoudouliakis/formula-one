/* Place angular imports */
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

/* Place RxJs imports */
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    let newId; // id in camelcase
    const id = route.paramMap.get("id");

    if(id) {
      const idArr = id.split("_").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));
      newId = idArr.join(" ");
    }

    return of(`Formula 1 | ${newId}`);
  }
}
