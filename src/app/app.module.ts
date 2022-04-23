import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule, DrawerModule, HeroModule, SkillsModule, ProjectsModule } from './components';
import { CustomIconRegistryModule } from './custom-icon-registry.module';
import { BreakpointObserverService, ProfileService, ThemeSwitcherService } from './services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, //
    CustomIconRegistryModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeroModule,
    HttpClientModule,
    DrawerModule,
    AboutModule,
    SkillsModule,
    ProjectsModule,
  ],
  providers: [ThemeSwitcherService, BreakpointObserverService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
