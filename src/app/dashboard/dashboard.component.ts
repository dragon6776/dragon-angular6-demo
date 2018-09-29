import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    currentUser: User;
    users: User[] = [];
    loading: boolean;

    constructor(
        private router: Router,
        private userService: UserService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        alert('not implement yet');
        // this.userService.delete(id).pipe(first()).subscribe(() => { 
        //     this.loadAllUsers() 
        // });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

    private loadAllUsers() {
        // this.userService.getAll().pipe(first()).subscribe(users => { 
        //     this.users = users; 
        // });
        this.loading = true;
        this.userService.getAll()
            .subscribe(data => {
                this.loading = false;
                this.users = data;
            });
    }

}
