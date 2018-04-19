import { User } from './User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
//mock data 


@Injectable()
export class MatchesService {
    users: User[];
    constructor(private http: HttpClient) {
        
    }
    getFilteredUsers(filters:any[]): User[] {

        return this.users;
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>('http://localhost:9000/matches')
            .pipe(catchError(this.handleError<User[]>('getUsers')));

    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return Observable.of(result as T);
        }
    }
}