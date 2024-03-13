import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VmListComponent } from './components/vm-list/vm-list.component';
import { VMDetailsComponent } from './components/vm-details/vm-details.component';
import { AddVMComponent } from './components/add-vm/add-vm.component';

const routes: Routes = [
  { path: '', redirectTo: 'vms', pathMatch: 'full' },
  { path: 'vms', component: VmListComponent },
  { path: 'vms/:id', component: VMDetailsComponent },
  { path: 'addVms', component: AddVMComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }