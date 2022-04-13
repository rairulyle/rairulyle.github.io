import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule, DrawerModule, AboutModule, SkillsModule } from './components';
import { ThemeSwitcherService, BreakpointObserverService, ProfileService } from './services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, //
    BrowserAnimationsModule,
    BrowserModule,
    HeroModule,
    HttpClientModule,
    MatIconModule,
    DrawerModule,
    AboutModule,
    SkillsModule,
  ],
  providers: [ThemeSwitcherService, MatIconRegistry, BreakpointObserverService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
