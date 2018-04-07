import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-ng-model',
  templateUrl: './demo-ng-model.component.html',
  styleUrls: ['./demo-ng-model.component.css']
})
export class DemoNgModelComponent implements OnInit {
  myForm: FormGroup;
  productName: string;
  constructor(public fb: FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string) {
    console.log(value);
  }
}
