import { Component} from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  constructor(private controlService: ControlService) { }

  get PageNumber() { return this.controlService.PageNumber }
  get AnimationNumber() { return this.controlService.AnimationNumber}
  get LastPage() { return this.controlService.LastPage }

  changePage(number: number, lastPage: number): void {
    this.controlService.changePage(number, lastPage)
  }

  toggleAbout(): void {
    this.controlService.toggleAbout(false)
  }

  showPrompt(): void {
    alert('You will use the email address you are currently logged in to Google')
  }


}
