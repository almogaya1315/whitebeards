import { Component, Input } from '@angular/core';
import { IClass } from './class.model';
import { UserRepositoryService } from '../services/user-repository.service';

@Component({
  selector: 'wb-enroll',
  styles: [`.center { text-align: center; }
            .sign-in { color: #666; } `],
  template:`<td class="enroll center">
    <span class="sign-in" *ngIf="!userRepo.currentUser" disabled>Sign In to Enroll</span>
    <button *ngIf="userRepo.currentUser && !class.enrolled && !class.processing"
      (click)="enroll(class)">Enroll</button>
    <button *ngIf="userRepo.currentUser && class.enrolled && !class.processing"
      (click)="drop(class)">Drop</button>
    <wb-loading-spinner [loading]="class.processing"></wb-loading-spinner>
</td>`
})
export class EnrollComponent{
  @Input() class: IClass = { 
    classId: '-1',
    course: {
      courseNumber: '',
      courseName: '',
      creditHours: -1,
      description: ''
    },
    professor: '',
    days: '',
    time: '',
    seatsAvailable: 0,
    processing: false,
    enrolled: false
  };

  constructor(public userRepo: UserRepositoryService) {}

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.userRepo.enroll(classToEnroll.classId)
      .subscribe({
        error: (err) => { console.error(err); classToEnroll.processing = false },
        complete: () => { classToEnroll.processing = false; classToEnroll.enrolled = true; },
      });
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepo.drop(classToDrop.classId)
      .subscribe({
        error: (err) => { console.error(err); classToDrop.processing = false },
        complete: () => { classToDrop.processing = false; classToDrop.enrolled = false; }
      });
  }
}



