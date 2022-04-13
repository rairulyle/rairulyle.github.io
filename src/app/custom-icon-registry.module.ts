import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule],
  providers: [MatIconRegistry],
})
export class CustomIconRegistryModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('linkedin', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    matIconRegistry.addSvgIcon('github', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    matIconRegistry.addSvgIcon('gitlab', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/gitlab.svg'));
  }
}
