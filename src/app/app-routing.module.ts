import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VmListComponent } from './components/vm-list/vm-list.component';
import { VMDetailsComponent } from './components/vm-details/vm-details.component';
import { VMAddComponent } from './components/vm-add/vm-add.component';
import { VMGraphComponent } from './components/vm-graphs/vm-graphs.component';
import { VMConfigurationComponent } from './components/vm-configuration/vm-configuration.component';

const routes: Routes = [
  { path: '', redirectTo: 'vms', pathMatch: 'full' },
  { path: 'vms', component: VmListComponent },
  { path: 'vms/:id', component: VMDetailsComponent },
  { path: 'addVms', component: VMAddComponent },
  { path: 'graphs', component: VMGraphComponent },
  { path: 'config', component: VMConfigurationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }