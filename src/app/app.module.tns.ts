import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DrawerActionBarComponent } from './drawer-action-bar/drawer-action-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    DrawerActionBarComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    NativeScriptUISideDrawerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
