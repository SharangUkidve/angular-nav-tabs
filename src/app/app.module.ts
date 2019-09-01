import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTabBarComponent } from './components/nav-tab-bar/nav-tab-bar.component';
import { TabOneComponent } from './components/tab-one/tab-one.component';
import { TabTwoComponent } from './components/tab-two/tab-two.component';
import { TabThreeComponent } from './components/tab-three/tab-three.component';
import { TabLinkDirective } from './directives/tab-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavTabBarComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
