import { Component, Input } from '@angular/core';

import * as app from 'tns-core-modules/application';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'drawer-action-bar',
  templateUrl: './drawer-action-bar.component.html',
  styleUrls: ['./drawer-action-bar.component.css']
})
export class DrawerActionBarComponent {
  @Input() title = '';

  showDrawer() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  closeDrawer() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }
}
