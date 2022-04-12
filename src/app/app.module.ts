import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './components/about/about.module';
import { HeroModule } from './components/hero/hero.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { ThemeSwitcherService } from './services/theme-switcher.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, //
    BrowserAnimationsModule,
    BrowserModule,
    HeroModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    NavBarModule,
    AboutModule,
  ],
  providers: [ThemeSwitcherService, MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
