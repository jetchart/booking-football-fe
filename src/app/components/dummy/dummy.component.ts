import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../domain/user";

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  myForm: FormGroup;
  user: User = new User();

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.user.name = "MESSI!!!";
    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
    });
  }

  save() {
    console.log("Valid", this.myForm.valid);
    this.user = this.myForm.value;
  }

  // https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol

}
