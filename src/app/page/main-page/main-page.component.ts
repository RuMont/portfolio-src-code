import { Component } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  get PageNumber() { return this.controlService.PageNumber }
  get AnimationNumber() { return this.controlService.AnimationNumber}
  get MainPage() { return this.controlService.MainPage }
  get AboutText() { return this.controlService.AboutText }

  constructor(private controlService: ControlService) {}

  changePage(number: number): void {
    this.controlService.changePage(number)
  }

  toggleAbout(): void {
    this.controlService.toggleAbout(true)
  }

}
