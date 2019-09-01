import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTabLink]'
})
export class TabLinkDirective {

  @Input() active: boolean;
  @HostBinding('class.tab-link') test = true;
  @HostBinding('class.tab-link-active') get linkActive() { return this.active; }
  constructor(public el: ElementRef<HTMLElement>) { }
}

export interface TabLink {
  title: string;
  routerLink: string;
}
