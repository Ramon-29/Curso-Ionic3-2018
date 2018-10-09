import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService, User } from '../../services/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  
  public form: FormGroup;

  public submittedValues = {};

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private usersService: UsersService) {

  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: [''],
      sex: [''],
      phone: [0],
      email: ['', [Validators.required, Validators.email]]
    });

    this.usersService.getUsers(1).subscribe( (user: User)=>{
      this.form.patchValue(user);
    });
  }

  formSubmitted(){
    this.submittedValues = this.form.value;
    console.log(this.form);
  }
}
