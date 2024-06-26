import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VMAddComponent } from './components/vm-add/vm-add.component';
import { VmListComponent } from './components/vm-list/vm-list.component';
import { VMDetailsComponent } from './components/vm-details/vm-details.component';
import { VMConfigurationComponent } from './components/vm-configuration/vm-configuration.component';
import { VMGraphComponent } from './components/vm-graphs/vm-graphs.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmBoxConfigModule, NgxAwesomePopupModule } from '@costlydeveloper/ngx-awesome-popup';

import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCardModule, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ToastrModule } from 'ngx-toastr';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    VMAddComponent,
    VMDetailsComponent,
    VmListComponent,
    VMConfigurationComponent,
    VMGraphComponent

  ],
  imports: [
    AppRoutingModule,
    MatMenuModule,
    MatButton,
    MatTooltip,
    MatIconModule,
    MatSort,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatPaginatorModule,
    MatPaginator,
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule, // required animations module
    BrowserModule,
    BaseChartDirective,
    NgxAwesomePopupModule.forRoot({
      colorList: {
        success: '#3caea3', // optional
        info: '#2f8ee5', // optional
        warning: '#ffc107', // optional
        danger: '#e46464', // optional
        customOne: '#3ebb1a', // optional
        customTwo: '#bd47fa', // optional (up to custom five)
      },
    }),
    ConfirmBoxConfigModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }), // ToastrModule added
  ],
  providers: [
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
