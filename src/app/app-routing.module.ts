import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VmListComponent } from './components/vm-list/vm-list.component';
import { VMDetailsComponent } from './components/vm-details/vm-details.component';
import { VMAddComponent } from './components/vm-add/vm-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'vms', pathMatch: 'full' },
  { path: 'vms', component: VmListComponent },
  { path: 'vms/:id', component: VMDetailsComponent },
  { path: 'addVms', component: VMAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }