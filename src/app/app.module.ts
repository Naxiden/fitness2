import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstSectionComponent } from './modules/first-section/first-section.component';
import { SecondSectionComponent } from './modules/second-section/second-section.component';
import { NavComponent } from './modules/nav/nav.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ContactFormComponent } from './modules/contact-form/contact-form.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    NavComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
