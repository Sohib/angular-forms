import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormSkuWithBuliderComponent } from './form-sku-with-bulider/form-sku-with-bulider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoNgModelComponent } from './demo-ng-model/demo-ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuWithBuliderComponent,
    DemoNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
