import { Injectable } from '@angular/core';
import { IWomenitem } from './womentitem';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class WomenitemService{
    private womenItemlistUrl='api/womenitems/womenitem.json';
    constructor(private http:HttpClient){}
        getWomenitems():Observable<IWomenitem[]>{
            return this.http.get<IWomenitem[]>(this.womenItemlistUrl).pipe(
                tap(data => console.log('All : '+JSON.stringify(data))),
                catchError(this.handleError)
            );
        }
        private handleError(err:HttpErrorResponse){
            let errorMessage='';
            if(err.error instanceof ErrorEvent){
                errorMessage=`An error occured: ${err.error.message}`;
            }
            else
            {
                errorMessage=`Server retruned code: ${err.status},error message is: ${err.message}`;
            }
            console.error(errorMessage);
            return throwError(errorMessage);
        }
}