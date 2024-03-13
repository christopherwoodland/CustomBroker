import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVMComponent } from './components/add-vm/add-vm.component';
import { VMDetailsComponent } from './components/vm-details/vm-details.component';
import { VmListComponent } from './components/vm-list/vm-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddVMComponent,
    VMDetailsComponent,
    VmListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
