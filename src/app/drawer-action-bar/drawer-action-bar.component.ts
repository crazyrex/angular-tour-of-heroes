import { Component, Input } from '@angular/core';

import * as app from 'tns-core-modules/application';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { isIOS } from 'tns-core-modules/platform';

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

  get icon(): string {
    if (isIOS) {
      return String.fromCharCode(0x2630);
    }

    return '';
  }
}
