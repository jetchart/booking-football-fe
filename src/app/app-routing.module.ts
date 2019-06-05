import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {ReservesComponent} from './components/reserves/reserves.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'reserves', component: ReservesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
