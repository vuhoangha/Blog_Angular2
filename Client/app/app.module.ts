import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SumaryPostComponent } from './sumary.post';
import { DataProvider } from './server/request';
import { TutorialComponent } from './tutorial.component';
import { HttpModule } from '@angular/http'
@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [
    SumaryPostComponent,
    TutorialComponent
  ],
  providers: [DataProvider],
  bootstrap: [SumaryPostComponent]
})
export class AppModule { }
