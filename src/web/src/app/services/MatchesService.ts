import {User, IUser} from './User'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs'; 
//mock data 


@Injectable()
export class MatchesService {
    users: User[];
        constructor(private http: HttpClient){
            const Users: User[] = [
                { displayName: "Colette",
                  age: 39,
                  jobTitle:  "Doctor - Hospital",
                  height: 177, 
                  city: { name: "Swindon", lat: 51.568535, lon: -1.772232 },
                  photo: "https://randomuser.me/api/portraits/women/94.jpg",
                  compatibility: 0.89,
                  contacts: 2, 
                  favourite: false,
                  religion: "Christian"
                },
                { displayName: "Stephanie",
                age: 33,
                jobTitle:  "Project Manager",
                height: 160, 
                city: { name: "London", lat: 51.509865, lon: -0.118092},
                photo: "https://randomuser.me/api/portraits/women/54.jpg",
                compatibility: 0.87,
                contacts: 4, 
                favourite: false,
                religion: "Christian"
              },
              { displayName: "Claire",
              age: 48,
              jobTitle:  "Doctor - Hospital",
              height: 167, 
              city: { name: "London", lat: 51.509865, lon: -0.118092},
              photo: "https://randomuser.me/api/portraits/women/78.jpg",
              compatibility: 0.84,
              contacts: 6, 
              favourite: true,
              religion: "Atheist"
            }
            ];
            this.users = Users; 
        }
    getUsers(): User[]{

        return this.users; 
    }

    getAllUsers():Observable<User[]> {
      return this.http.get<User[]>('http://localhost:9000/matches')
        .pipe(catchError(this.handleError<User[]>('getUsers')));
       
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return Observable.of(result as T);
        }
      }
}