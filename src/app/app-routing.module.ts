import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabOneComponent } from './components/tab-one/tab-one.component';
import { TabTwoComponent } from './components/tab-two/tab-two.component';
import { TabThreeComponent } from './components/tab-three/tab-three.component';


const routes: Routes = [
  { path: 'one', component: TabOneComponent },
  { path: 'two', component: TabTwoComponent },
  { path: 'three', component: TabThreeComponent },
  { path: '', redirectTo: 'one', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
