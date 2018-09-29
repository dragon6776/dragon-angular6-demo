import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: [''],
      firstName: [''],
      lastName: ['']
    });
  }

  get f() { return this.registerForm.controls; };

  onSubmit() {
    if(!this.f.username.value || !this.f.username.value || !this.f.firstName.value || !this.f.lastName.value){
      alert('invalid');
      return;
    }

    this.userService.register(this.registerForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['login']);
      }, error => {
        alert('error!');
        console.log(error);
      });

    return;
  }

}
