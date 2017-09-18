import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DataService } from "./dataService";
import { UploadChartComponent } from './upload-chart/upload-chart.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    UploadChartComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path: "charts",
      component: UploadChartComponent
    }, {
      path: "charts/:uid",
      component: ChartComponent
    }, { 
      path: '**', 
      component: UploadChartComponent
    }])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
