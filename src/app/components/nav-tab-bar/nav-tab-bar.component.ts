import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
  AfterContentInit
} from '@angular/core';
import { TabLinkDirective } from 'src/app/directives/tab-link.directive';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-tab-bar',
  templateUrl: './nav-tab-bar.component.html',
  styleUrls: ['./nav-tab-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavTabBarComponent implements OnInit, AfterContentInit {

  @Input() stretchTabs: boolean;

  @ContentChildren(TabLinkDirective) tabItemRefs: QueryList<TabLinkDirective>;
  @ViewChild('activeIndicator', { static: false }) activeIndicatorRef: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.router.events.subscribe({
      next: (routerEvent) => {
        if (routerEvent instanceof NavigationEnd) {
          this.repositionIndicator();
        }
      }
    });
  }

  ngAfterContentInit() {
    if (this.stretchTabs) {
      this.tabItemRefs.forEach(tab => {
        this.renderer.addClass(tab.el.nativeElement, 'tab-link-stretched');
      });
    }
  }


  private findActiveTab(): HTMLElement {
    const activeTab = this.tabItemRefs.find(tab => tab.active);
    return activeTab ? activeTab.el.nativeElement : null;
  }

  @HostListener('window: resize')
  repositionIndicator() {
    setTimeout(() => {
      const tab = this.findActiveTab();
      if (tab) {
        this.renderer.setStyle(this.activeIndicatorRef.nativeElement, 'left', tab.offsetLeft + 'px');
        this.renderer.setStyle(this.activeIndicatorRef.nativeElement, 'width',
          (tab.clientWidth || tab.getBoundingClientRect().width) + 'px');
        tab.blur();
      }
    }, 0);
  }
}
