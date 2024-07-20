import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  
  FormArray, 
  FormControl, 
  FormGroup, 
  FormsModule, 
  ReactiveFormsModule, 
  Validators }
  from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit  {

  formStatus: string = '';

  reactiveForm : FormGroup

  ngOnInit() {  
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]), //need email prop
      username: new FormControl(null), 
      dob: new FormControl(null),
      gender: new FormControl('male'),
      // nsted form group
      address: new FormGroup({
      street: new FormControl(null,Validators.required),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null, Validators.required),
}),
    skills: new FormArray([
      new FormControl(null, Validators.required),
    ]),
    experience: new FormArray([
    ])
})
  
    this.reactiveForm.statusChanges.subscribe((status) => {
    console.log(status);
    this.formStatus = status;
  })
  }
  OnFormSubmitted() {
    console.log(this.reactiveForm);
}

  // add formcontroll dynamiclly
  addSkill(){
    (<FormArray>this.reactiveForm.get('skills'))
    .push( new FormControl(null, Validators.required));
  }
  // remove formcontroll dynamiclly
  deleteSkill(index: number){
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }

  // add formgroup dynamiclly
  addExperience(){
    const formGroup = new FormGroup({
      company: new FormControl(null, Validators.required),
      position:  new FormControl(null, Validators.required),
      totalExp:  new FormControl(null, Validators.required),
      start:  new FormControl(null , Validators.required),
      end:  new FormControl(null, Validators.required),
    });
    
    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }
  
  deleteExperience(index: number){
    const formArray = <FormArray>this.reactiveForm.get('experience');
    formArray.removeAt(index);
  }
  
  generateUsername(){
    let username = '';
    const fname = this.reactiveForm.get('firstname').value;
    const lname = this.reactiveForm.get('lastname').value;
    const dob = this.reactiveForm.get('dob').value;

    if(fname.length >= 3) {
      username += fname.slice(0, 3);
    }
    else{
      username += fname;
    }
    if(lname.length >= 3) {
      username += lname.slice(0, 3);
    }
    else{
      username += fname;
    }
    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();
    console.log(username);

    // this.reactiveForm.setValue({
    //   firstname: this.reactiveForm.get('firstname').value,
    //   lastname: this.reactiveForm.get('lastname').value,
    //   email: this.reactiveForm.get('email').value,
    //   username: username, 
    //   dob: this.reactiveForm.get('dob').value,
    //   gender: this.reactiveForm.get('gender').value,
    //   address: {
    //   street: this.reactiveForm.get('address.street').value,
    //   country: this.reactiveForm.get('address.country').value,
    //   city: this.reactiveForm.get('address.city').value,
    //   region: this.reactiveForm.get('address.region').value,
    //   postal: this.reactiveForm.get('address.postal').value,
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience: this.reactiveForm.get('experience').value,
    // })

    // this.reactiveForm.get('username').setValue(username);

  // this.reactiveForm.get('username').setValue(username);
    this.reactiveForm.patchValue({
      username: username,
      address: {
        city: " New Delhi"
      }
    })

  }
  
}




