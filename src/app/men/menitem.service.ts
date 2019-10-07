import { Injectable } from '@angular/core';
import { IMenitem } from './menItem';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class MenitemService{
    private menItemlistUrl='api/menItems/menitem.json';
    constructor(private http:HttpClient){}
    getMenitems():Observable<IMenitem[]>{
        return this.http.get<IMenitem[]>(this.menItemlistUrl).pipe(
            tap(data =>console.log('All : '+JSON.stringify(data))),
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