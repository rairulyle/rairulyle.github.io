import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomIconRegistryModule } from './custom-icon-registry.module';
import { GraphQLModule } from './graphql.module';
import { DrawerModule } from './modules';
import { PortfolioModule } from './pages';
import { BreakpointObserverService, ThemeSwitcherService } from './services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, //
    CustomIconRegistryModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    DrawerModule,
    PortfolioModule,
    GraphQLModule,
  ],
  providers: [ThemeSwitcherService, BreakpointObserverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
