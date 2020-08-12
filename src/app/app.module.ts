import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadsliderComponent } from './component/headslider/headslider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsSliderComponent } from './component/details-slider/details-slider.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeadsliderComponent,
    DetailsSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    Ng2CarouselamosModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
