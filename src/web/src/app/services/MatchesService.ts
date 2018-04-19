import { User } from './User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
//mock data 


@Injectable()
export class MatchesService {

    users: User[];
    currentHost = ''; 
    constructor(private http: HttpClient) {
        this.currentHost = window.location.host;
    }
    private getUrl(filters: any): string {
        let url = `http://${this.currentHost}/matches?contacts=${filters.contacts}&photo=${filters.photo}
        &favourites=${filters.favourites}
        &distance=${filters.distance}
        &age=${filters.startAge}-${filters.endAge}
        &height=${filters.startHeight}-${filters.endHeight}
        &compatibility=${filters.startCompatibility}-${filters.endCompatibility}`;
        url = url.replace(/ /gi,''); // need to replace unwanted empty spaces
        return url;
    }
    setFilters(data: any) {
        const url = this.getUrl(data);
    }

    getFilteredUsers(filters: any): Observable<User[]> {

        const url = this.getUrl(filters);

        return this.http.get<User[]>(url)
            .pipe(catchError(this.handleError<User[]>('getUsers')));
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`http://${this.currentHost}/matches`)
            .pipe(catchError(this.handleError<User[]>('getUsers')));

    }

    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return Observable.of(result as T);
        }
    }
}