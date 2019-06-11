import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {ReservesComponent} from './components/reserves/reserves.component';
import {ContactComponent} from './components/contact/contact.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {DummyComponent} from "./components/dummy/dummy.component";
import {DayModalComponent} from "./components/day-modal/day-modal.component";
import {DayListComponent} from "./components/day-list/day-list.component";

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'reserves', component: ReservesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'userEdit', component: UserEditComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'dayModal', component: DayModalComponent },
  { path: 'dayList', component: DayListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
