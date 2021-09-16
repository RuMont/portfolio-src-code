import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { PageComponent } from './page.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ProjectsPageComponent,
    PageComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
