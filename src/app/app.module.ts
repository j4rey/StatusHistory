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

@NgModule({
  declarations: [
    AppComponent,
    StatusHistoryParentComponent,
    StatusGridComponent,
    StatusGridTwoComponent,
    AddStatusTwoComponent,
    AddStatusOneComponent,
    StatusOptionNamePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
