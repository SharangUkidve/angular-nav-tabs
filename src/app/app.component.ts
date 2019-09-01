import { Component } from '@angular/core';
import { TabLink } from './directives/tab-link.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: TabLink[] = [
    { title: 'First', routerLink: 'one' },
    { title: 'Second', routerLink: 'two' },
    { title: 'Third', routerLink: 'three' },
  ];
}
