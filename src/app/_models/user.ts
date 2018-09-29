export class User {
    // constructor(id: number, username: string, password: string, name: string){
    //     this.id = id;
    //     this.username = username;
    //     this.password = password;
    //     this.firstName = name;
    //     this.lastName = 'JWT';
    // }

    constructor(obj?: any){
        this.id = obj.id;
        this.username = obj.username;
        this.password = obj.password;
        this.firstName = obj.name;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }

    id: number;
    username: string;
    password: string;
    name: string;
    firstName: string;
    lastName: string;
}
