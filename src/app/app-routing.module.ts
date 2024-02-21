import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstSectionComponent } from './modules/first-section/first-section.component';
import { SecondSectionComponent } from './modules/second-section/second-section.component';

const routes: Routes = [
  //examples for routing for interview
  { path: 'first-component', component: FirstSectionComponent },
  { path: 'second-component', component: SecondSectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
