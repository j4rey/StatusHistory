import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatusHistoryParentComponent } from './status-history-parent/status-history-parent.component';
import { StatusGridComponent } from './status-history-parent/grid/status-grid/status-grid.component';
import { StatusGridTwoComponent } from './status-history-parent/grid/status-grid-two/status-grid-two.component';
import { AddStatusTwoComponent } from './status-history-parent/add-status/add-status-two/add-status-two.component';
import { AddStatusOneComponent } from './status-history-parent/add-status/add-status-one/add-status-one.component';
import { StatusOptionNamePipe } from './service/status-pipe.service';
import { StatusHistoryLandingComponent } from './status-history-parent/status-history-landing.component';
import { GridLandingComponent } from './grid/grid-landing.component';
import {RouterModule} from '@angular/router';
import { DxDataGridModule, DxDropDownButtonModule } from 'devextreme-angular';

const routes = [
  {path:'', component:StatusHistoryLandingComponent},
  {path:'grid', component:GridLandingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StatusHistoryParentComponent,
    StatusGridComponent,
    StatusGridTwoComponent,
    AddStatusTwoComponent,
    AddStatusOneComponent,
    StatusOptionNamePipe,
    StatusHistoryLandingComponent,
    GridLandingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxDropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
