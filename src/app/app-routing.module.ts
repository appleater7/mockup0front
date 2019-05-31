import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ParentComponent } from './parent/parent.component';
import { UpbitComponent } from './upbit/upbit.component';

const routes: Routes = [
  {
    path:'intro',
    component:IntroComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'upbit',
    component:UpbitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
