class city {
    name: string;
    lat: number;
    lon: number;
}

export class User {
    displayName: String;
    age: number;
    jobTitle: String;
    height: number;
    city?: city;
    photo: String;
    compatibility: number;
    contacts: number;
    favourite: boolean;
    religion: String;
}

export interface IUser {
    displayName: String;
    age: number;
    jobTitle: String;
    height: number;
    city?: {
        name: string;
        lat: number;
        lon: number;
    }
    photo: String;
    compatibility: number;
    contacts: number;
    favourite: boolean;
    religion: String;
}
