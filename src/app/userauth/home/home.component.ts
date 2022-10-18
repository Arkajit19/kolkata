import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  school = 'DDKKHA';
  college = 'MSIT';
  color = 'xyz';
  users = ['Bikash', 'Tarun', 'Mohan', 'Kamal', 'Sapna'];

  getvalue(item: any) {
    console.warn(item);
  }

  regform = new FormGroup({
    pname: new FormControl('', [Validators.required]),
    loc: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    psw: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  Signupuser() {
    console.warn(this.regform.value);
  }
  get pnamevalidator() {
    return this.regform.get('pname');
  }
  get locvalidator() {
    return this.regform.get('loc');
  }
  get emailvalidator() {
    return this.regform.get('email');
  }
  get pswvalidator() {
    return this.regform.get('psw');
  }
  students: any[] = [
    {
      ID: 'std101',
      FirstName: 'Preety',
      LastName: 'Tiwary',
      Branch: 'CSE',
      DOB: '29/02/1988',
      Gender: 'Female',
    },
    {
      ID: 'std102',
      FirstName: 'Anurag',
      LastName: 'Mohanty',
      Branch: 'ETC',
      DOB: '23/05/1989',
      Gender: 'Male',
    },
    {
      ID: 'std103',
      FirstName: 'Priyanka',
      LastName: 'Dewangan',
      Branch: 'CSE',
      DOB: '24/07/1992',
      Gender: 'Female',
    },
    {
      ID: 'std104',
      FirstName: 'Hina',
      LastName: 'Sharma',
      Branch: 'ETC',
      DOB: '19/08/1990',
      Gender: 'Female',
    },
    {
      ID: 'std105',
      FirstName: 'Sambit',
      LastName: 'Satapathy',
      Branch: 'CSE',
      DOB: '12/94/1991',
      Gender: 'Male',
    },
  ];
}
