import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-sku-with-bulider',
  templateUrl: './form-sku-with-bulider.component.html',
  styleUrls: ['./form-sku-with-bulider.component.css']
})
export class FormSkuWithBuliderComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  skuValidator = function (control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
  };

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe((value: string) => console.log(value));
    this.myForm.valueChanges.subscribe((value: string) => console.log(value));

  }

  ngOnInit() {
  }

  onSubmit(value) {
    if (this.myForm.invalid) {
      console.error('invalid');
      return;
    }
    console.log('you submitted value: ', value);
  }
}

