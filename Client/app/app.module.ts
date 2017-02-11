import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SumaryPostComponent } from './sumary.post';
import { TutorialComponent } from './tutorial.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [SumaryPostComponent, TutorialComponent],
  bootstrap: [SumaryPostComponent]
})
export class AppModule { }
