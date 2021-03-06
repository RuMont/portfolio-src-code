import { Component } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent{

  constructor(private controlService: ControlService) { }

  get Projects() { return this.controlService.Projects }
  get PageNumber() { return this.controlService.PageNumber }
  get AnimationNumber() { return this.controlService.AnimationNumber}
  get LastPage() { return this.controlService.LastPage }

  changePage(number: number, lastPage: number): void {
    this.controlService.changePage(number, lastPage)
  }

  toggleAbout(): void {
    this.controlService.toggleAbout(false)
  }

}
