import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//Page components//

import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "portfolio", component: PortfolioComponent},
  { path: "resume", component: ResumeComponent},
  { path: "", redirectTo: "/", pathMatch: "full"}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
