import { Injectable } from '@angular/core';
import { Project } from './projects-page/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private pageNumber: number = 0
  private animationNumber: number = 0
  private lastPage: number = 0
  private aboutText: boolean = false
  private mainPage: boolean = true
  private projects: Project[] = []

  get PageNumber() { return this.pageNumber }
  get AnimationNumber() { return this.animationNumber }
  get LastPage() { return this.lastPage }
  get MainPage() { return this.mainPage }
  get AboutText() { return this.aboutText }
  get Projects() { return [...this.projects] }

  constructor() {
    // Hardcoded for now, JSON is pending
    this.projects = [
      {
        title: 'Python Battler',
        media: 'Insert video here',
        live: 'Live',
        description: 'Simple game made in Python, you can create a fictional creature with random hp and attack values and you can set up random battles against randomized creatures.',
        code: 'Code'
      },
      {
        title: 'E-Commerce',
        media: 'Insert video here',
        live: 'Live',
        description: 'Simple game made in Python, you can create a fictional creature with random hp and attack values and you can set up random battles against randomized creatures.',
        code: 'Code'
      },
      {
        title: 'Django Project',
        media: 'Insert video here',
        live: 'Live',
        description: 'Simple game made in Python, you can create a fictional creature with random hp and attack values and you can set up random battles against randomized creatures.',
        code: 'Code'
      },
    ]
  }

  changePage(value: number, lastValue: number) {
    let that = this
    this.animationNumber = value
    this.lastPage = lastValue
    setTimeout(function () {
      that.pageNumber = value;
    }, 800)
  }

  toggleAbout(bool: boolean): void {
    this.aboutText = bool
  }

}
