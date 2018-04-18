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

    create(data){
        const userInstance = new User(); 
        userInstance.displayName = data.display_name; 
        userInstance.age = data.age; 
        userInstance.compatibility = data.compatibility_score; 
        userInstance.contacts = data.contacts_exchanged; 
        userInstance.favourite = data.favourite; 
        userInstance.height = data.height_in_cm; 
        userInstance.jobTitle = data.job_title; 
        userInstance.photo = data.main_photo; 
        userInstance.religion = data.religion; 
        
        const userCity = new city(); 
        
        // userCity.lat = data.city.lat; 
        // userCity.lon = data.city.lon; 
        // userCity.name = data.city.name; 
        userInstance.city = userCity; 
        return userInstance; 
    }
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
